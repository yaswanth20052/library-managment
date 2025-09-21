const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Temporary in-memory database
const users = [
  {
    email: 'yaswantth21@gmail.com',
    password: '23541'
  }
];

// Sign-in endpoint
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Sign-in successful!' });
  } else {
    res.json({ success: false, message: 'Invalid email or password.' });
  }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
