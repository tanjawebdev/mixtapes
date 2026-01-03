interface SerialPort {
  open(options: { baudRate: number }): Promise<void>;
  close(): Promise<void>;
  readable: ReadableStream<Uint8Array>;
  writable: WritableStream<Uint8Array>;
}

interface NavigatorWithSerial extends Navigator {
  serial: {
    requestPort(options?: unknown): Promise<SerialPort>;
    // NEU: Damit wir abfragen können, welche Ports schon erlaubt wurden
    getPorts(): Promise<SerialPort[]>;
  };
}

type DataCallback = (data: string) => void;

class SerialService {
  private port: SerialPort | null = null;
  private reader: ReadableStreamDefaultReader<string> | null = null;
  private isReading = false;

  /**
   * Prüft, ob der Browser Web Serial unterstützt
   */
  public isSupported(): boolean {
    return "serial" in navigator;
  }

  /**
   * NEU: Versucht automatisch zu verbinden, ohne Popup.
   * Funktioniert nur, wenn der User dem Port früher schon mal zugestimmt hat.
   * Gibt true zurück, wenn es geklappt hat.
   */
  public async tryAutoConnect(onData: DataCallback): Promise<boolean> {
    if (!this.isSupported()) return false;

    try {
      const nav = navigator as unknown as NavigatorWithSerial;
      // Hole Liste aller bereits erlaubten Ports
      const ports = await nav.serial.getPorts();

      if (ports.length > 0) {
        // Wir nehmen einfach den ersten (meistens hat man nur einen Arduino dran)
        this.port = ports[0];

        // Baudrate muss stimmen (115200 wie in deinem Code)
        await this.port.open({ baudRate: 115200 });

        this.isReading = true;
        this.readLoop(onData).catch((err) => console.error("Loop Error:", err));

        return true; // Erfolg!
      }
    } catch (error) {
      console.warn("Auto-Connect fehlgeschlagen:", error);
    }

    return false; // Kein bekannter Port gefunden
  }

  /**
   * Öffnet den Port-Auswahldialog und startet den Lesevorgang.
   */
  public async connect(onData: DataCallback): Promise<void> {
    if (!this.isSupported()) {
      throw new Error("Web Serial wird von diesem Browser nicht unterstützt.");
    }

    try {
      // Hier casten wir navigator zu unserem Interface
      const nav = navigator as unknown as NavigatorWithSerial;
      this.port = await nav.serial.requestPort();

      // Öffnen (Baudrate muss mit Arduino übereinstimmen!)
      await this.port.open({ baudRate: 115200 });

      // Start Reading Loop
      this.isReading = true;
      // Wir warten hier nicht auf den Loop, damit connect() fertig wird
      this.readLoop(onData).catch((err) => console.error("Loop Error:", err));
    } catch (error) {
      console.error("Error connecting to serial port:", error);
      throw error;
    }
  }

  /**
   * Trennt die Verbindung
   */
  public async disconnect() {
    this.isReading = false;
    if (this.reader) {
      await this.reader.cancel();
      this.reader = null;
    }
    if (this.port) {
      await this.port.close();
      this.port = null;
    }
  }

  /**
   * Interne Loop-Funktion
   */
  private async readLoop(onData: DataCallback) {
    if (!this.port) return;

    const textDecoder = new TextDecoderStream();

    this.port.readable
      .pipeTo(textDecoder.writable as unknown as WritableStream<Uint8Array>)
      .catch(console.error);

    this.reader = textDecoder.readable.getReader();

    let buffer = "";

    try {
      while (this.isReading) {
        // Hier casten wir reader.read(), da TypeScript manchmal denkt, value könnte undefined sein
        const { value, done } = await this.reader.read();

        if (done) break;

        if (value) {
          buffer += value;

          if (buffer.includes("\n")) {
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const cleanLine = line.trim();
              if (cleanLine.length > 0) {
                onData(cleanLine);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Read error:", error);
    } finally {
      if (this.reader) {
        this.reader.releaseLock();
      }
    }
  }
}

export const serialService = new SerialService();
