// app.js

// Import Express framework
const express = require('express');

// Create an Express app
const app = express();

// Use PORT from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Simple route to test app
app.get('/', (req, res) => {
  res.send('<h1>✅ Node.js App Running on Kubernetes!</h1>');
});

// Health check route (optional, good for Kubernetes liveness probe)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Start the server on 0.0.0.0 so Kubernetes can route traffic
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
