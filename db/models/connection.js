const db = require('../');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

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
