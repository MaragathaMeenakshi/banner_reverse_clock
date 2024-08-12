const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase',
  port:'3306'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/api/banner', (req, res) => {
  const sql = 'SELECT * FROM banners WHERE id = 1';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

app.post('/api/banner', (req, res) => {
  const { showBanner, bannerName, description, hour, minute, second, link } = req.body;
  const sql = 'UPDATE banners SET showBanner = ?, bannerName = ?, description = ?, hour = ?, minute = ?, second = ?, link = ? WHERE id = 1';
  db.query(sql, [showBanner, bannerName, description, hour, minute, second, link], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Banner updated successfully!' });
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
