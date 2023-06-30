const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

// Register a publisher
app.post('/api/publisher/register', (req, res) => {
    // Process the registration form data
    const { firstName, lastName, organizationName, email, password } = req.body;


    // Generate a verification token
    const verificationToken = uuidv4();

    // Send email verification link
    const verificationLink = `http://localhost:3000/verify-email/${verificationToken}`;
    const transporter = nodemailer.createTransport({


    });
    const mailOptions = {

    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Email verification could not be sent' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Registration successful, please check your email for verification' });
        }
    });
});

// Verify email for publisher
app.get('/api/publisher/verify-email/:token', (req, res) => {
    const { token } = req.params;

    res.json({ message: 'Email verification successful' });
});

// Register an author
app.post('/api/author/register', (req, res) => {
    // Process the registration form data
    const { firstName, lastName, email, password } = req.body;
    // TODO: Save the author details in the database

    // Generate a verification token
    const verificationToken = uuidv4();

    // Send email verification link
    const verificationLink = `http://localhost:3000/verify-email/${verificationToken}`;
    const transporter = nodemailer.createTransport({

    });
    const mailOptions = {

    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Email verification could not be sent' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Registration successful, please check your email for verification' });
        }
    });
});

// Verify email for author
app.get('/api/author/verify-email/:token', (req, res) => {
    const { token } = req.params;

    res.json({ message: 'Email verification successful' });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
