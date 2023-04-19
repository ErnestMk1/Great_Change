const mysql = require('mysql');

const db = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b17a72db58b53f",
  password: "7fc29bef",
  database: "heroku_91496c6b5f32be5",
});

module.exports = db;

// mysql://b17a72db58b53f:7fc29bef@us-cdbr-east-06.cleardb.net/heroku_91496c6b5f32be5?reconnect=true
