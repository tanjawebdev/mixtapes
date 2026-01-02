#!/usr/bin/env node

/**
 * Simple WebSocket Test Server for Portfolio Exhibition System
 *
 * This server helps you test the WebSocket integration locally.
 *
 * Usage:
 *   1. Install ws: npm install ws
 *   2. Run: node websocket-test-server.js
 *   3. Start the React app: npm run dev
 *   4. Watch the portfolio update automatically
 */

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log("🚀 WebSocket Test Server running on ws://localhost:8080");
console.log("");
console.log("Waiting for client connections...");
console.log("");

wss.on("connection", (ws) => {
  console.log("✅ Client connected!");
  console.log("");
  console.log("📡 Starting test sequence...");
  console.log("");

  // Test 1: Show intro text after 2 seconds
  setTimeout(() => {
    const msg = { studentId: "01", state: "text_intro.txt" };
    console.log("📤 Sending:", JSON.stringify(msg));
    ws.send(JSON.stringify(msg));
  }, 2000);

  // Test 2: Show story text after 5 seconds
  setTimeout(() => {
    const msg = { studentId: "01", state: "text_story.txt" };
    console.log("📤 Sending:", JSON.stringify(msg));
    ws.send(JSON.stringify(msg));
  }, 5000);

  // Test 3: Show cover image after 8 seconds
  setTimeout(() => {
    const msg = { studentId: "01", state: "cover.jpg" };
    console.log("📤 Sending:", JSON.stringify(msg));
    ws.send(JSON.stringify(msg));
  }, 8000);

  // Test 4: Show project image after 11 seconds
  setTimeout(() => {
    const msg = { studentId: "01", state: "project1.jpg" };
    console.log("📤 Sending:", JSON.stringify(msg));
    ws.send(JSON.stringify(msg));
  }, 11000);

  // Test 5: Show video after 14 seconds
  setTimeout(() => {
    const msg = { studentId: "01", state: "project1.mp4" };
    console.log("📤 Sending:", JSON.stringify(msg));
    ws.send(JSON.stringify(msg));
  }, 14000);

  ws.on("close", () => {
    console.log("");
    console.log("❌ Client disconnected");
  });
});

console.log(
  "💡 Tip: Open http://localhost:5173 in your browser to see the portfolio display"
);
console.log("");
