const mysql = require('mysql');

const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'wild_circus',
});
module.exports = connection;
