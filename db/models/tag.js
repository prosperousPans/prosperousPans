const db = require('../');

const Tag = db.Model.extend({
  tableName: 'tag',
  user_tag: function() {
    return this.hasMany('users_tag');
  }
});

module.exports = db.model('Tag', Tag);
