const express = require('express');
const app = express();
const port = 3000; // Choose any port you prefer

// Body parser middleware to parse incoming request bodies
app.use(express.json());

// Define a route handler for POST requests to /signup
app.post('/signup', (req, res) => {
    // Handle the signup logic here
    res.send('Signup successful'); // Send a response back to the client
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
