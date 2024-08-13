const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Mahimachintu98@',
  database: 'mydatabase',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/api/banner', (req, res) => {
  const sql = 'SELECT * FROM banners ';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// app.post('/api/banner', (req, res) => {
//   const { showBanner, bannerName, description, hour, minute, second, link } = req.body;
//   const sql = 'UPDATE banners SET showBanner = ?, bannerName = ?, description = ?, hour = ?, minute = ?, second = ?, link = ? WHERE id = 1';
//   db.query(sql, [showBanner, bannerName, description, hour, minute, second, link], (err, result) => {
//     if (err) throw err;
//     res.send({ message: 'Banner updated successfully!' });
//   });
// });

app.post('/api/banner', (req, res) => {
  const banner = req.body;

  // Check if the required fields are present
  if (!banner.bannerName || !banner.description || banner.showBanner === undefined || !banner.hour || !banner.minute || !banner.second || !banner.link) {
    return res.status(400).send({ message: 'Invalid data format or missing fields' });
  }

  const sql = 'INSERT INTO banners (bannerName, description, showBanner, hour, minute, second, link) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [
    banner.bannerName,
    banner.description,
    banner.showBanner,
    banner.hour,
    banner.minute,
    banner.second,
    banner.link
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send({ message: 'Database error' });
    }
    res.send({ message: 'Banner inserted successfully', insertedId: result.insertId });
  });
});


app.listen(3001, () => {
  console.log('Server running on port 3001');
});
