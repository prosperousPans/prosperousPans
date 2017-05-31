const db = require('../');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const Users_tag = db.Model.extend({
  tableName: 'users_tag',
  users: function() {
    return this.belongsTo('users');
  },
  tag: function() {
    return this.belongsTo('tag');
  }
});

module.exports = db.model('Users_tag', Users_tag);
