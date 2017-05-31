const db = require('../');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const Reason = db.Model.extend({
  tableName: 'reason',
  connection_reason: function() {
    return this.hasMany('connection_reason');
  }
});

module.exports = db.model('Reason', Reason);
