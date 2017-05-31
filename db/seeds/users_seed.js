const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.Users.forge({
    full_name: 'Rajas Kale',
    industry: 'Neural Engineering',
    github_url: 'https://github.com/Kale007',
    linkedin_url: 'https://www.linkedin.com/in/rajas-kale/',
    image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/00f/3dc/078778b.jpg',
    summary: 'I like turtles',
  }).save()
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'kale007',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 1,
      name: 'education',
      role: 'PhD student',
      description: 'I like learn',
      start_date: 2013,
      end_date: 2017,
      organization: 'Mayo Clinic'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 1,
      name: 'professional',
      role: 'Quality Control',
      description: 'Test specialist on injectable prescriptions drug',
      start_date: 2009,
      end_date: 2011,
      organization: 'Lifecore LLC'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  .then((user) => {
    return models.Users.forge({
      full_name: 'Alan Zheng',
      industry: 'Software Engineering',
      github_url: 'https://github.com/aszheng',
      linkedin_url: 'https://www.linkedin.com/in/aszheng/',
      image: 'https://avatars1.githubusercontent.com/u/20808751?v=3&u=3e73a0402b412ec68bc2d1c25734382714e0e24b&s=400',
      summary: 'I like pandas',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'aszheng',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 2,
      name: 'professional',
      role: 'Finance & Operations Analyst',
      description: 'Excel Stuff',
      start_date: 2015,
      end_date: 2017,
      organization: 'App Annie'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  .then((user) => {
    return models.Users.forge({
      full_name: 'Lavanya AC',
      industry: 'Software Engineering',
      github_url: 'https://github.com/lavanyaac',
      linkedin_url: 'https://www.linkedin.com/in/lavanya-ammi-chandrashekara-02a21713b/',
      image: 'https://avatars2.githubusercontent.com/u/25909813?v=3&s=400',
      summary: 'I am a full stack developer',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'lavanyaac',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 3,
      name: 'work',
      role: 'Software Engineer',
      description: 'I like to code',
      start_date: 2013,
      end_date: 2017,
      organization: 'Target'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .catch(() => {
    console.log('WARNING: defualt user already exists.');
  });
};
