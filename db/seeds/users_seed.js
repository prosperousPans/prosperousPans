const models = require('../models');

exports.seed = function (knex, Promise) {
  // user1
  return models.Users.forge({
    full_name: 'Rajas Kale',
    industry: 'Neural Engineering',
    github_url: 'https://github.com/Kale007',
    linkedin_url: 'https://www.linkedin.com/in/rajas-kale/',
    image: 'https://avatars2.githubusercontent.com/u/26387553?v=3&s=460',
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
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 9
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 10
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
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
  .then((experience) => {
    return models.Experience.forge({
      users_id: 1,
      name: 'projects',
      role: 'Pursumé',
      description: 'We made this damn app!!!!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user2
  .then((user) => {
    return models.Users.forge({
      full_name: 'Alan Zheng',
      industry: 'Software Engineering',
      github_url: 'https://github.com/aszheng',
      linkedin_url: 'https://www.linkedin.com/in/aszheng/',
      image: 'https://avatars0.githubusercontent.com/u/20808751?v=3&s=460',
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
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 2
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
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
  .then((experience) => {
    return models.Experience.forge({
      users_id: 2,
      name: 'projects',
      role: 'Pursumé',
      description: 'You see this app? We made this app!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 2,
      name: 'education',
      role: 'Student',
      description: 'All this learning here',
      start_date: 2010,
      end_date: 2014,
      organization: 'Berkeley'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  //user 3
  .then((user) => {
    return models.Users.forge({
      full_name: 'Lavanya AC',
      auth_id:'auth0%7C592e5a4f8fb5fe30a672ce8b',
      industry: 'Software Engineering',
      github_url: 'https://github.com/lavanyaac',
      linkedin_url: 'https://www.linkedin.com/in/lavanya-ammi-chandrashekara-02a21713b/',
      image: 'https://avatars0.githubusercontent.com/u/25909813?v=3&s=460',
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
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 3,
      name: 'professional',
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
  .then((experience) => {
    return models.Experience.forge({
      users_id: 3,
      name: 'projects',
      role: 'Pursumé',
      description: 'Best app ever!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 3,
      name: 'education',
      role: 'Student',
      description: 'I graduated',
      start_date: 2002,
      end_date: 2006,
      organization: 'BIT'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  //user4
  .then((user) => {
    return models.Users.forge({
      full_name: 'Anthony Wong',
      industry: 'Software Engineering',
      github_url: 'https://github.com/shrimpwongton',
      linkedin_url: 'https://www.linkedin.com/in/anthonywg/',
      image: 'https://avatars0.githubusercontent.com/u/6591210?v=3&s=400',
      summary: 'Android Developer transitioning towards Full Stack Software Engineering.',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'shrimpwongton',
      password: 'password'
    }).save()
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 12
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 14
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'professional',
      role: 'Andriod Developer',
      description: 'Java Baby',
      start_date: 2016,
      end_date: 2016,
      organization: 'DabKick'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'projects',
      role: 'Viator',
      description: 'Material UI',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'education',
      role: 'Student',
      description: 'BS Computer Science',
      start_date: 2012,
      end_date: 2016,
      organization: 'UC San Diego'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user5
  .then((user) => {
    return models.Users.forge({
      full_name: 'Charles Kim',
      industry: 'Software Engineering',
      github_url: 'https://github.com/ChKim',
      linkedin_url: 'https://www.linkedin.com/in/cjkim0119/',
      image: 'https://avatars1.githubusercontent.com/u/20958854?v=3&s=460',
      summary: 'I make stuff for that do things for reasons',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'ChKim',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 10
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 5,
      name: 'professional',
      role: 'Senior Analyst',
      description: 'Instacart enables and provides on-demand grocery deliveries within as little as one hour in 30+ markets, from 100+ grocery retailers. A YC alum, Instacart has received funding from partners including Kleiner Perkins, Sequoia, and Andreessen Horowitz.',
      start_date: 2014,
      end_date: null,
      organization: 'Instacart'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 5,
      name: 'projects',
      role: 'Something Something Recipes',
      description: 'Eat everything!',
      start_date: 2016,
      end_date: 2017,
      organization: 'Infamous Frogs'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 5,
      name: 'education',
      role: 'Student',
      description: 'Founded in 1881 as the first collegiate business school, the Wharton School of the University of Pennsylvania is recognized globally for intellectual leadership and ongoing innovation across every major discipline of business education. With a broad global community and one of the most published business school faculties, Wharton creates economic and social value around the world.',
      start_date: 2002,
      end_date: 2010,
      organization: 'University of Pennsylvania'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user6
  .then((user) => {
    return models.Users.forge({
      full_name: 'Ming Feng',
      industry: 'Software Engineering',
      github_url: 'https://github.com/minggfeng',
      linkedin_url: 'https://www.linkedin.com/in/minggfeng/',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAADhAAAAJGNkNmRlMGJjLTZiNWItNDBhZC1hOTRiLTc4MWU1NDZiMjJhMw.jpg',
      summary: 'Full stack engineer currently looking for opportunities',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'mingfeng',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 11
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 6,
      name: 'professional',
      role: 'Clinical Systems Analyst',
      description: 'Supported the applications of OpTime, Anesthesia, and the surgical component of Phoenix.',
      start_date: 2014,
      end_date: 2017,
      organization: 'Stanford Health Care'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 6,
      name: 'projects',
      role: 'This legacy',
      description: 'skooled app!',
      start_date: 2017,
      end_date: 2016,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 6,
      name: 'education',
      role: 'Student',
      description: 'BS Chemistry',
      start_date: 2006,
      end_date: 2010,
      organization: 'University of Wisconsin-Madision'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user7
  .then((user) => {
    return models.Users.forge({
      full_name: 'Jeffrey Chen',
      industry: 'Software Engineering',
      github_url: 'https://github.com/jeffc12',
      linkedin_url: 'https://www.linkedin.com/in/jeffrey-chen/',
      image: 'https://avatars1.githubusercontent.com/u/23188557?v=3&s=460',
      summary: 'I like waffles',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'jeffc12',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 19
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 9
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 7,
      name: 'professional',
      role: 'Undergraduate Researcher',
      description: 'Research',
      start_date: 2015,
      end_date: 2015,
      organization: 'University of Oregon'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 7,
      name: 'projects',
      role: 'Green field',
      description: 'Amazing app!',
      start_date: 2014,
      end_date: 2016,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 7,
      name: 'education',
      role: 'Student',
      description: 'B.S. Physics',
      start_date: 2011,
      end_date: 2016,
      organization: 'University of Oregon'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user8
  .then((user) => {
    return models.Users.forge({
      full_name: 'Tom Dickson',
      industry: 'Software Engineering',
      github_url: 'https://github.com/t0mdicks0n',
      linkedin_url: 'https://www.linkedin.com/in/t0mdicks0n/',
      image: 'https://avatars1.githubusercontent.com/u/22496165?v=3&s=400',
      summary: 'I\'m an amazing software engineer' ,
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'tomdickson',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 10
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 16
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 8,
      name: 'professional',
      role: 'KAM and Business Development',
      description: 'Your Digital Mailbox!',
      start_date: 2013,
      end_date: 2017,
      organization: 'Kivra'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 8,
      name: 'projects',
      role: 'This legacy',
      description: 'Travel App',
      start_date: 2017,
      end_date: 2016,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 8,
      name: 'education',
      role: 'Student',
      description: 'BSc in Business, Finance',
      start_date: 2010,
      end_date: 2013,
      organization: 'Stockholm University'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user9
  .then((user) => {
    return models.Users.forge({
      full_name: 'Jon Eric Escobedo, E.I.T.',
      industry: 'Civil Engineering',
      github_url: 'https://github.com/JonEricEscobedo',
      linkedin_url: 'https://www.linkedin.com/in/jonericescobedo/',
      image: 'https://avatars3.githubusercontent.com/u/22602434?v=3&s=460',
      summary: 'Project Manager with over five years of environmental experience advising environmental professionals in interpreting federal and state air regulatory guidelines and designing best in class customized plans to capture air pollutants for regulatory compliance demonstration. ',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'joneric',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 19
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 18
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 9,
      name: 'professional',
      role: 'Sales Engineer / Project Manager',
      description: 'Advise industrial professionals and engineers in interpreting federal and state air quality guidelines',
      start_date: 2012,
      end_date: 2016,
      organization: 'Enthalpy Analytical'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 9,
      name: 'projects',
      role: 'This Thesis',
      description: 'An app to write about product!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 9,
      name: 'education',
      role: 'Student',
      description: 'B.S. Civil Engineering',
      start_date: 2004,
      end_date: 2009,
      organization: 'UC Davis'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user10
  .then((user) => {
    return models.Users.forge({
      full_name: 'Alexander Liang',
      industry: 'Software Engineering',
      github_url: 'https://github.com/axllgn',
      linkedin_url: 'https://www.linkedin.com/in/alliang/',
      image: 'https://avatars3.githubusercontent.com/u/17916893?v=3&s=400',
      summary: 'Looking for Full-Stack engineering opportunities',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'axllgn',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 9
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 10,
      name: 'professional',
      role: 'Manufacturing Quality Engineer',
      description: 'I like to test',
      start_date: 2016,
      end_date: 2016,
      organization: 'Fabrinet'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 10,
      name: 'projects',
      role: 'This greenfield',
      description: 'An app to test the product!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 10,
      name: 'education',
      role: 'Student',
      description: 'BS Mechnical Engineering & Material Science',
      start_date: 2009,
      end_date: 2013,
      organization: 'UC Davis'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user11
  .then((user) => {
    return models.Users.forge({
      full_name: 'Kriz Cortés',
      industry: 'Software Engineering',
      github_url: 'https://github.com/sirkortes',
      linkedin_url: 'https://www.linkedin.com/in/sirkortes/',
      image: 'https://avatars2.githubusercontent.com/u/5361945?v=3&s=460',
      summary: 'A graphic artist and web designer by day. A programming student by night, in pursuance of creating stunning applications for mobile devices and mixed reality platforms.',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'kriscortez',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 17
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 19
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 11,
      name: 'professional',
      role: 'Creative Head',
      description: 'I create visual elements that convey the brand\'s product, service and culture promptly and clear. This includes everything from Logos, Colors, Website, Social Media, Stationery, Advertisements and more.',
      start_date: 2013,
      end_date: null,
      organization: 'Strategic Graphic Design'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 11,
      name: 'projects',
      role: 'This legacy',
      description: 'An app to help manage people!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 11,
      name: 'education',
      role: 'Student',
      description: 'Bachelors Graphic Design and Digital Animation',
      start_date: 2007,
      end_date: 2010,
      organization: 'Atlantic College'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user12
  .then((user) => {
    return models.Users.forge({
      full_name: 'Oliver Ullman',
      industry: 'Software Engineering',
      github_url: 'https://github.com/oriooctopus',
      linkedin_url: 'https://www.linkedin.com/in/oliver-ullman/',
      image: 'https://avatars0.githubusercontent.com/u/20331238?v=3&s=400',
      summary: 'I play piano',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'oriooctopus',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 12,
      name: 'professional',
      role: 'Freelance Web Developer',
      description: 'I build websites',
      start_date: 2016,
      end_date: 2017,
      organization: 'Upwork'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 12,
      name: 'projects',
      role: 'Greenfield',
      description: 'An app that makes music!',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 12,
      name: 'education',
      role: 'Student',
      description: 'Too cool for college',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user13
  .then((user) => {
    return models.Users.forge({
      full_name: 'Kara Marnell',
      industry: 'Software Engineering',
      github_url: 'https://github.com/kmarnell',
      linkedin_url: 'https://www.linkedin.com/in/karamarnell/',
      image: 'https://avatars0.githubusercontent.com/u/18540889?v=3&s=400',
      summary: 'I take pictures',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'kmarnell',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 16
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 13,
      name: 'professional',
      role: 'Genius Admin',
      description: 'Genius',
      start_date: 2014,
      end_date: null,
      organization: 'Apple'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 13,
      name: 'projects',
      role: 'Greenfield',
      description: 'Greenfield App',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 13,
      name: 'education',
      role: 'Student',
      description: 'BA Spanish Teaching Education',
      start_date: 2009,
      end_date: 2011,
      organization: 'College of Charleston'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })



  // CREATE CONNECTIONS
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 2,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 3,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 4,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 6,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 8,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 9,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 10,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 1,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 3,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 4,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 8,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 9,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 11,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 1,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 2,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 5,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 8,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 10,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 11,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 1,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 3,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 8,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 10,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 11,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 1,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 4,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 6,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 8,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 10,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 11,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 2,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 3,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 7,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 8,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 10,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 11,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 1,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 2,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 3,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 8,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 10,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 11,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 2,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 3,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 5,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 6,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 7,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 10,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 11,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 2,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 3,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 6,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 10,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 11,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 1,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 3,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 6,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 8,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 11,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 1,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 2,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 5,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 6,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 10,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 3,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 5,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 8,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 10,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 1,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 2,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 6,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 10,
      status: 'accept'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 12,
      status: 'reject'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
};




// copy users (id, full_name, industry) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/users.csv' delimiter ',' csv header;

// copy connection (users_a_id, users_b_id, status) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/connection.csv' delimiter ',' csv header;

// copy experience (users_id, name, role, organization) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/experience.csv' delimiter ',' csv header;




// copy users (id, full_name, industry) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/users.csv' delimiter ',' csv header;

// copy connection (users_a_id, users_b_id, status) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/connection.csv' delimiter ',' csv header;

// copy experience (users_id, name, role, organization) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/experience.csv' delimiter ',' csv header;
