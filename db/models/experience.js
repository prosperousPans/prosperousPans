const db = require('../');

const Experience = db.Model.extend({
  tableName: 'experience',
  users: function() {
    return this.belongsTo('users');
  }
});

module.exports = db.model('Experience', Experience);
