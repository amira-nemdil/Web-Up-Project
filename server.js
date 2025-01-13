// filepath: server.js
const express = require('express');
const bodyParser = require('body-parser');
const faceapi = require('face-api.js');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let users = []; // In-memory storage for demonstration purposes

// Endpoint to store face descriptors during sign-up
app.post('/api/signup', (req, res) => {
  const { username, email, password, faceDescriptors } = req.body;
  const user = { username, email, password, faceDescriptors };
  users.push(user);
  res.status(200).send({ message: 'User signed up successfully' });
});

// Endpoint to retrieve and compare face descriptors during sign-in
app.post('/api/getFaceDescriptors', (req, res) => {
  const { descriptors } = req.body;
  let match = false;

  for (const user of users) {
    for (const storedDescriptor of user.faceDescriptors) {
      const distance = faceapi.euclideanDistance(descriptors[0], storedDescriptor);
      if (distance < 0.6) { // Threshold for face match
        match = true;
        break;
      }
    }
    if (match) break;
  }

  res.status(200).send({ match });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});