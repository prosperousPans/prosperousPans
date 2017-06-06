const db = require('../');

const Connection = db.Model.extend({
  tableName: 'connection',
  users: function() {
    return this.belongsTo('users');
  },
  connection_reason: function() {
    return this.hasMany('connection_reason');
  }
});

module.exports = db.model('Connection', Connection);
