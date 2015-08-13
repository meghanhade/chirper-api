var controllers = require('./controllers/.index');
var actions = require('./actions/.index');

module.exports = function(app) {
  
  // User
  app.route('/users')
    .get(controllers.user.list)
    .post(controllers.user.add);
  app.route('/users/:user_id')
    .get(controllers.user.load)
    .put(controllers.user.update)
    .delete(controllers.user.remove);

};