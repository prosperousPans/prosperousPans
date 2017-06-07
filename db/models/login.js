const db = require('../');

const Login = db.Model.extend({
  tableName: 'login',
  users: function() {
    return this.belongsTo('users');
  }
});

module.exports = db.model('Login', Login);
