main.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZapLink - Social Media App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #FFA500; /* Pure, rich, shiny orange */
            height: 100vh; /* Full viewport height */
            display: flex; /* Center content vertically */
            justify-content: center; /* Center content horizontally */
            align-items: center; /* Center content vertically */
            margin: 0; /* Remove default margin */
            flex-direction: column; /* Align items in a column */
        }
        .container {
            text-align: center;
        }
        .logo {
            max-width: 200px;
            opacity: 0; /* Initially hide the logo */
            animation: fadeIn 2s ease forwards; /* Fade in animation */
        }
        .slogan {
            color: white; /* White text color */
            font-family: cursive; /* Cursive font style */
            font-size: 24px; /* Adjust font size */
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="logo.png" alt="Logo" class="logo" id="logo">
        <div class="slogan">JOIN THE BUZZ</div>
    </div>
    <script>
        setTimeout(function() {
            document.getElementById('logo').style.display = 'none'; // Hide the logo
            document.querySelector('.slogan').style.display = 'none'; // Hide the slogan
            document.body.innerHTML += `<a href="signup.html" class="btn btn-primary">Sign Up</a>
                                         <a href="login.html" class="btn btn-secondary">Login</a>`; // Add signup/login buttons
        }, 3000); // 3000 milliseconds (3 seconds) delay
    </script>
</body>
</html>

signup.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - ZapLink</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #FFA500; /* Same background color as the first page */
            height: 100vh; /* Full viewport height */
            display: flex; /* Center content vertically */
            justify-content: center; /* Center content horizontally */
            align-items: center; /* Center content vertically */
            margin: 0; /* Remove default margin */
        }
        .container {
            text-align: center;
            padding: 20px; /* Adjusted padding to make the dialog box smaller */
            max-width: 350px; /* Increase the maximum width of the dialog box */
            background-color: #f8f9fa; /* Light gray background */
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Shadow effect */
        }
        .form-group {
            margin-bottom: 15px; /* Reduced margin bottom */
        }
        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Sign Up</h2>
        <form id="signup-form">
            <div class="form-group">
                <input type="text" class="form-control" id="username" placeholder="Username" required>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password" required>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="confirm-password" placeholder="Confirm Password" required>
                <small id="password-match-error" class="form-text text-danger d-none">Passwords do not match.</small>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
        </form>
    </div>

    <script>
        document.getElementById('signup-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form input values
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Client-side validation
            if (password !== confirmPassword) {
                document.getElementById('password-match-error').classList.remove('d-none');
                return;
            } else {
                document.getElementById('password-match-error').classList.add('d-none');
            }

            // Redirect to profile page after successful signup
            window.location.href = 'profile.html';
        });
    </script>
</body>
</html>

login.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - ZapLink</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #FFA500; /* Same background color as the first page */
            height: 100vh; /* Full viewport height */
            display: flex; /* Center content vertically */
            justify-content: center; /* Center content horizontally */
            align-items: center; /* Center content vertically */
            margin: 0; /* Remove default margin */
        }
        .container {
            text-align: center;
            padding: 20px; /* Adjusted padding to make the dialog box smaller */
            max-width: 350px; /* Increase the maximum width of the dialog box */
            background-color: #f8f9fa; /* Light gray background */
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Shadow effect */
        }
        .form-group {
            margin-bottom: 15px; /* Reduced margin bottom */
        }
        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form id="login-form">
            <div class="form-group">
                <input type="text" class="form-control" id="usernameOrEmail" placeholder="Username or Email" required>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
    </div>

    <script>
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form input values
            const usernameOrEmail = document.getElementById('usernameOrEmail').value;
            const password = document.getElementById('password').value;

            // Redirect to profile page after successful login
            window.location.href = 'profile.html';
        });
    </script>
</body>
</html>

profile.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile - ZapLink</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <!-- Include navigation or header if needed -->
    </header>

    <div class="container">
        <div class="profile-header">
            <div class="profile-picture-container">
                <img src="profile-picture.jpg" alt="Profile Picture" class="profile-picture">
                <label for="profile-photo-input" class="upload-photo-label">Change Profile Photo</label>
                <input type="file" id="profile-photo-input" accept="image/*">
            </div>
            <div class="profile-info">
                <h1 class="username">Deeksha</h1>
                <button class="edit-profile-button">Edit Profile</button>
            </div>
        </div>
        <div class="profile-bio">
            <p>Life is short, make it sweet.</p>
        </div>
        <!-- Add more profile information here -->
    </div>

    <footer>
        <!-- Include footer if needed -->
    </footer>
</body>
</html>

styles.css:

/* styles.css */

body {
    font-family: Arial, sans-serif;
    background-color: #FFA500; /* Orange background color */
    margin: 0;
    padding: 0;
}


.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1, h2 {
    margin-bottom: 10px;
}

.profile {
    display: flex;
    align-items: center;
}

.profile-picture {
    margin-right: 20px;
}

.profile-picture img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.profile-info {
    flex: 1;
}

button {
    padding: 10px 20px;
    background-color: #007bff; /* Blue button color */
    color: #fff; /* White text color */
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3; /* Darker blue on hover */
}
.profile-picture-container {
    position: relative;
    width: 150px; /* Adjust as needed */
    height: 150px; /* Adjust as needed */
    overflow: hidden;
    border-radius: 50%; /* Make it circular */
}

.profile-picture {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire container */
}

.upload-photo-label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    color: #fff; /* Text color */
    padding: 5px;
    cursor: pointer;
}

server.js:

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const corsOptions = {
  origin: 'http://192.168.56.1:8080/', // Replace with your frontend domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/social-media-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    //res.header("Access-Control-Allow-Origin","http://localhost:3000")
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Define user schema and model using Mongoose
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String
});

// Route for user signup
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Respond with success message and new user data
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    // Handle errors
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'An error occurred during signup' });
  }
});

// Route for user login (to be implemented)
app.post('/login', (req, res) => {
  // Logic for user login
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

