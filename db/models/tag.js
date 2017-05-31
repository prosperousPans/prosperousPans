const db = require('../');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const Tag = db.Model.extend({
  tableName: 'tag',
  user_tag: function() {
    return this.hasMany('users_tag');
  }
});

module.exports = db.model('Tag', Tag);
