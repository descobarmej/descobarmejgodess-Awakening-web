// server.js (Node.js/Express setup)
const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'goddess_awakening'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send({ success: true, user: results[0] });
    } else {
      res.status(401).send({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Additional routes for Register, Meditations, Rituals, Community, etc.

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
