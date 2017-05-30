const db = require('../');

const User = db.Model.extend({
  tableName: 'user',
  login: function() {
    return this.hasMany('login');
  },
  experience: function () {
    return this.hasMany('experience');
  },
  info_tag: function () {
    return this.hasMany('info_tag');
  },
  connection: function () {
    return this.hasMany('connection');
  }
});

module.exports = db.model('User', User);
