const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7aah3Dpjhony',
    database: 'adminpresupuesto'
  });
}