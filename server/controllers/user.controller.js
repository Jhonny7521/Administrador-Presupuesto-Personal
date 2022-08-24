const mysqlConfig = require("../config/mysql.config");
const connection = mysqlConfig();

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}

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

module.exports.create_operation

