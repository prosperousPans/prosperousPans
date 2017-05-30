const db = require('../');

const Connection = db.Model.extend({
  tableName: 'connection',
  user: function() {
    return this.belongsTo('user');
  },
  connection_reason: function() {
    return this.hasMany('connection_reason');
  }
});

module.exports = db.model('Connection', Connection);
