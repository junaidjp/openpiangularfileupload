const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware

app.use(cors());
// Middleware to capture and store request headers
app.use((req, res, next) => {
  // Capture and store request headers in a variable
  const requestHeaders = req.headers;

  // Pass the requestHeaders to the Angular application
  res.locals.requestHeaders = requestHeaders;

  next();
});

app.get('/', (req, res) => {
  res.send('Hello, this is the root path.');
});


// Define a route to handle requests to /api/headers
app.get('/api/headers', (req, res) => {
  // This route sends back the captured request headers
  console.log('Request to /api/headers received.');
  const requestHeaders = res.locals.requestHeaders;
  res.json(requestHeaders);
});

// Serve the Angular application (static files)
app.use(express.static('dist/sample-angular-app'));

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
