const mysqlConfig = require("../config/mysql.config");
const connection = mysqlConfig();
const mysql = require('mysql');

module.exports.get_all = (req, res) => {  
  
  connection.query('SELECT * FROM users', (err, result) => {
    if (err){
      console.log("Ocurrio un problema");
      console.log(err);
      return
    }
    res.json(result);
    console.log(result);
  });
};

module.exports.create_operation = (req, res) => {
  console.log(req.body);
  let {concept, amount, date, type, user_id} = req.body;
  let createQuery = 'INSERT INTO operations(concept, amount, date, type, user_id) VALUES (?, ?, ?, ?, ?)';
  let query = mysql.format(createQuery, [concept, amount, date, type, user_id]);
  connection.query(query, (err, result) => {
    if (err){
      console.log("Ocurrio un problema");
      console.log(err);
      return
    }
    res.json(result);
    console.log(result);
  })
}