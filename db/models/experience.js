const db = require('../');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const Experience = db.Model.extend({
  tableName: 'experience',
  users: function() {
    return this.belongsTo('users');
  }
});

module.exports = db.model('Experience', Experience);
