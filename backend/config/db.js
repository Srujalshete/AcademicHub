const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'school'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as id', db.threadId);
});

module.exports = db;


