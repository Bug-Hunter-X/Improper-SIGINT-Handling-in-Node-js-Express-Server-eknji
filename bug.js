const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 1000);
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// ... other code ...

// Incorrect way to close the server
process.on('SIGINT', () => {
  process.exit(0); // Immediately exits without graceful shutdown
});