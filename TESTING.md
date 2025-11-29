# Testing Guide

## WebSocket Testing

### 1. Install WebSocket dependency for test server

```bash
npm install ws
```

### 2. Start the test WebSocket server

```bash
node websocket-test-server.js
```

This will:
- Start a WebSocket server on `ws://localhost:8080`
- Wait for the React app to connect
- Send test messages automatically every 3 seconds

### 3. Start the React app (in a separate terminal)

```bash
npm run dev
```

### 4. Watch the magic happen

Open `http://localhost:5173` in your browser and watch as the portfolio automatically cycles through:
1. Intro text (text_intro.txt)
2. Story text (text_story.txt)
3. Cover image (cover.jpg)
4. Project image (project1.jpg)
5. Video (project1.mp4)

## Manual WebSocket Testing

You can also send messages manually using a WebSocket client or browser console:

```javascript
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  // Show text
  ws.send(JSON.stringify({
    studentId: "01",
    state: "text_intro.txt"
  }));
  
  // Show image
  ws.send(JSON.stringify({
    studentId: "01",
    state: "cover.jpg"
  }));
  
  // Show video
  ws.send(JSON.stringify({
    studentId: "01",
    state: "project1.mp4"
  }));
};
```

## Expected Behavior

✅ WebSocket connects automatically  
✅ Connection status shows "Connected" (green, top-right)  
✅ Student data loads and caches  
✅ Content displays with smooth transitions  
✅ Images fade in when loaded  
✅ Videos autoplay and loop  

## Browser DevTools Checklist

1. **Console Tab**: Look for these messages
   - `[WebSocket] Connected`
   - `[Data] Loading /students/01/data.json`
   - `[Preload] Image: ...`
   - `[Display] Rendering ...`

2. **Network Tab**: Verify
   - `data.json` loads once and is cached
   - Media files are preloaded
   - No 404 errors

3. **Performance**: Check
   - Smooth 60fps animations
   - No layout shifts
   - Fast content switching

## Troubleshooting

### "WebSocket connection failed"
→ Make sure the test server is running: `node websocket-test-server.js`

### "Failed to load student data"
→ Check that `/public/students/01/data.json` exists

### Videos don't play
→ Ensure MP4 format and reasonable file size
→ Check browser autoplay policy (videos are muted to allow autoplay)

### Content doesn't update
→ Open browser console to see WebSocket messages
→ Verify message format: `{ studentId: "01", state: "filename.ext" }`
