const CronJob = require('cron').CronJob;
const axios = require('axios');

var getMatchesCron = function(){
  axios.get('http://localhost:3000/users', {params: {userA_id: '_USERIDHERE'}})
  .then( result => {
    console.log('result after GET REQUEST', result.data)
  })

  console.log('HELLOO FROM CRON');
}

// updates every minute 
var cron = new CronJob({
  cronTime: '*/1 * * * *',
  onTick: getMatchesCron,
  start: true,
  timeZone: 'America/Los_Angeles'
});


