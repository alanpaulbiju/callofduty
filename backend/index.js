const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve login file
app.get('/login', (req, res) => {
  const loginSuccess = req.query.loginSuccess;
  res.sendFile(path.join(__dirname, 'login.html'), { loginSuccess });
});

// Serve signup file
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

// Handle login form submission
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Here you would normally check against a database
  console.log(`Login attempt: ${username}, ${password}`);

  // If successful login (you can add more checks here)
  res.redirect('/login?loginSuccess=true');
});

// Handle signup form submission
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Simulate a signup (you can expand with actual database logic)
  console.log(`Signup attempt: ${username}, ${email}, ${password}`);

  // After successful signup, redirect to login page with success message
  res.redirect('/login?signupSuccess=true');
});

// Serve the React homepage (now handled by static files middleware)
app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
