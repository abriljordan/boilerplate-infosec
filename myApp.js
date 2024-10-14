const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet for security
app.use(helmet());

// Example route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;