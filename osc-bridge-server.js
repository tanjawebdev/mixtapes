import osc from 'osc';
import { WebSocketServer } from 'ws';

console.log('🎛️  Starting OSC Bridge Server...\n');

// Create WebSocket server for React app
const wss = new WebSocketServer({ port: 8081 });
const clients = new Set();

wss.on('connection', (ws) => {
    console.log('✅ React app connected to WebSocket');
    clients.add(ws);

    ws.on('close', () => {
        console.log('❌ React app disconnected from WebSocket');
        clients.delete(ws);
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
        clients.delete(ws);
    });
});

// Create OSC UDP Port to receive from Max/MSP
const udpPort = new osc.UDPPort({
    localAddress: '127.0.0.1',
    localPort: 9991,
    metadata: true
});

udpPort.on('ready', () => {
    console.log('🎵 OSC UDP Server listening on:');
    console.log('   Address: 127.0.0.1');
    console.log('   Port: 9991');
    console.log('\n📡 WebSocket Server listening on:');
    console.log('   Port: 8081');
    console.log('\n✨ Bridge is ready! Waiting for messages from Max/MSP...\n');
});

udpPort.on('message', (oscMsg) => {
    console.log('📨 Received OSC:', oscMsg.address, oscMsg.args);

    // Forward to all connected WebSocket clients (React app)
    const message = JSON.stringify(oscMsg);
    clients.forEach((client) => {
        if (client.readyState === 1) { // WebSocket.OPEN
            client.send(message);
        }
    });
});

udpPort.on('error', (err) => {
    console.error('❌ OSC UDP Error:', err);
});

// Open the UDP port
udpPort.open();

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n👋 Shutting down OSC Bridge Server...');
    udpPort.close();
    wss.close();
    process.exit(0);
});
