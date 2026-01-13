# OSC Integration with Max/MSP

This document explains how to use OSC data from Max/MSP to control the portfolio exhibition.

## Architecture

```
Arduino → Max/MSP → OSC Bridge Server → React App
   USB      UDP         WebSocket        Display
```

## Setup

1. **Install dependencies** (if not already installed):
   ```bash
   npm install osc ws
   ```

2. **Start the OSC Bridge Server**:
   ```bash
   node osc-bridge-server.js
   ```
   This starts:
   - OSC UDP listener on `127.0.0.1:9991` (receives from Max/MSP)
   - WebSocket server on port `8081` (sends to React)

3. **Start your React dev server** (in another terminal):
   ```bash
   npm run dev
   ```

## Max/MSP Configuration

In Max/MSP, use `udpsend 127.0.0.1 9991` to send OSC messages:

### Supported OSC Messages

| OSC Address | Arguments | Example | Description |
|------------|-----------|---------|-------------|
| `/index` | `<number>` | `/index 12` | Set student index (becomes `student_12`) |
| `/nav` | `<string>` | `/nav next` or `/nav prev` | Navigate between states |
| `/scrollposition` | `<number>` | `/scrollposition 111` | Set scroll position |

## How It Works

1. **Max/MSP** sends OSC messages via UDP to port 9991
2. **OSC Bridge Server** receives UDP messages and forwards them as JSON via WebSocket
3. **React App** (`useOscData` hook) receives WebSocket messages and updates the store
4. **Portfolio Display** updates automatically based on store changes

## Offline Operation

✅ **This system works completely offline!**
- All communication happens on `localhost` (127.0.0.1)
- No internet connection required
- Perfect for exhibition environments

## Troubleshooting

- **"OSC Disconnected"**: Make sure `osc-bridge-server.js` is running
- **No data received**: Check Max/MSP is sending to `127.0.0.1:9991`
- **Port conflicts**: Ensure ports 9991 (OSC) and 8081 (WebSocket) are available
