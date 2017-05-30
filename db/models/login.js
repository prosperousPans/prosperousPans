const db = require('../');

const Login = db.Model.extend({
  tableName: 'login',
  user: function() {
    return this.belongsTo('user');
  }
});

module.exports = db.model('Login', Login);
