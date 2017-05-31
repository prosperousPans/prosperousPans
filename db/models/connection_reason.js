const db = require('../');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const Connection_reason = db.Model.extend({
  tableName: 'connection_reason',
  connection: function() {
    return this.belongsTo('connection');
  },
  reason: function() {
    return this.belongsTo('reason');
  }
});

module.exports = db.model('Connection_reason', Connection_reason);
