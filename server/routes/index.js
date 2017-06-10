// retrieving matches
module.exports.users = require('./users');
module.exports.experience = require('./experience');

// inserting response
module.exports.insertConnection = require('./insertConnection');
module.exports.checkMatch = require('./checkMatch');
module.exports.insertReason = require('./insertReason');

// chat
module.exports.chat = require('./chat');

// dashboard
module.exports.getConnect = require('./getConnect');

// graphDB
module.exports.createGraphDB = require('./createGraphDB');
module.exports.populateFullGraphDB = require('./populateFullGraphDB');
module.exports.recommendation = require('./recommendation');
module.exports.priorityRecommendation = require('./priorityRecommendation');

module.exports.getMatches = require('./getMatches');

