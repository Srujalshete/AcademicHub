const db = require('../config/db');

exports.signup = (req, res) => {
  const { fname, lname, email, dob, gender, mobile, password, address } = req.body;

  // Check if user already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "An error occurred while processing your request." });
    }
    
    if (results.length > 0) {
      // User already exists
      return res.status(400).json({ error: "User with this email already exists." });
    } else {
      // User does not exist, proceed to insert
      const sql = "INSERT INTO users (fname, lname, email, dob, gender, mobile, password, address) VALUES ?";
      const values = [[fname, lname, email, dob, gender, mobile, password, address]];

      db.query(sql, [values], (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: "An error occurred while processing your request." });
        }
        console.log("Number of records inserted: " + result.affectedRows);
        res.status(200).json({ message: "User signed up successfully." });
      });
    }
  });
};
