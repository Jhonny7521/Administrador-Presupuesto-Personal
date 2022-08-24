const UserController = require('../controllers/user.controller');
const OperationController = require('../controllers/operation.controller');

module.exports = function(app){
  app.get('/api', UserController.get_all);
  app.post('/operations/new', OperationController.create_operation);
}

