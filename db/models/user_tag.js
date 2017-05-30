const db = require('../');

const User_tag = db.Model.extend({
  tableName: 'user_tag',
  user: function() {
    return this.belongsTo('user');
  },
  tag: function() {
    return this.belongsTo('tag');
  }
});

module.exports = db.model('User_tag', User_tag);
