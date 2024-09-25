const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = 5001;

app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON bodies

app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send('Email is required');
  }
  res.send(`${email} is now registered`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
