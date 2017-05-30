const db = require('../');

const Experience = db.Model.extend({
  tableName: 'experience',
  user: function() {
    return this.belongsTo('user');
  }
});

module.exports = db.model('Experience', Experience);
