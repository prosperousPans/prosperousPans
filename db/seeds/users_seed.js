const models = require('../models');

exports.seed = function (knex, Promise) {
  // user1
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
  .then((experience) => {
    return models.Experience.forge({
      users_id: 1,
      name: 'projects',
      role: 'Thesis',
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
  .then((experience) => {
    return models.Experience.forge({
      users_id: 2,
      name: 'projects',
      role: 'Da Thesis',
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
      role: 'This Thesis',
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
      full_name: 'Tom Dickson',
      industry: 'Business Developer',
      github_url: 'https://github.com/tomisbomb',
      linkedin_url: 'https://www.linkedin.com/in/tom-dickson-4973b920/',
      image: 'http://d2x83fpq8bsx3q.cloudfront.net/wp-content/uploads/2012/11/Tom-green-smoothie-1024x669.jpg',
      summary: 'I businessed',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'tomisbomb',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'professional',
      role: 'Front-end Engineer',
      description: 'React baby',
      start_date: 2016,
      end_date: 2017,
      organization: 'Self-employed'
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
      role: 'Skooled',
      description: 'It renders!',
      start_date: 2016,
      end_date: 2017,
      organization: 'TomBomb'
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
      role: 'Sanitation Engineer',
      description: 'I cleaned up after people',
      start_date: 2002,
      end_date: 2010,
      organization: 'Clean Ops'
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
      industry: 'Senior Analyst',
      github_url: 'https://github.com/ChKim',
      linkedin_url: 'https://www.linkedin.com/in/cjkim0119/',
      image: 'https://instacart.files.wordpress.com/2015/05/instacart-1622-nobg.png',
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
  .then((experience) => {
    return models.Experience.forge({
      users_id: 5,
      name: 'professional',
      role: 'Front-stackEngineer',
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
      full_name: 'Tiffany lin',
      industry: 'Software Engineering',
      github_url: 'https://github.com/tifflin',
      linkedin_url: 'https://www.linkedin.com/in/tiffanylin/',
      image: 'https://avatars2.githubusercontent.com/u/25909813?v=3&s=400',
      summary: 'Full stack engineer currently looking for opportunities',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'tiffanylin',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 6,
      name: 'professional',
      role: 'Software Engineer',
      description: 'A team leader with hands-on experience in coding',
      start_date: 2015,
      end_date: 2017,
      organization: 'Apple'
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
      description: 'I graduated',
      start_date: 2010,
      end_date: 2012,
      organization: 'Berkeley'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user7
  .then((user) => {
    return models.Users.forge({
      full_name: 'Matt Damon',
      industry: 'Software Engineering',
      github_url: 'https://github.com/mattd',
      linkedin_url: 'https://www.linkedin.com/in/mattd/',
      image: 'https://avatars2.githubusercontent.com/u/25909813?v=3&s=400',
      summary: 'A technical architect looking for opportunities',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'mattd',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 7,
      name: 'professional',
      role: 'Technical Architect',
      description: 'Love architecing projects',
      start_date: 2016,
      end_date: 2017,
      organization: 'Intuit'
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
      description: 'Bachelor of Engineering',
      start_date: 2008,
      end_date: 2012,
      organization: 'MIT'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user8
  .then((user) => {
    return models.Users.forge({
      full_name: 'Chirstian Bale',
      industry: 'Software Engineering',
      github_url: 'https://github.com/Chirstianb',
      linkedin_url: 'https://www.linkedin.com/in/Chirstianb/',
      image: 'https://avatars2.githubusercontent.com/u/25909813?v=3&s=400',
      summary: 'I\'m an amazing software engineer' ,
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'chirstianb',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 8,
      name: 'professional',
      role: 'Software Engineer',
      description: 'Project manager',
      start_date: 2014,
      end_date: 2017,
      organization: 'Sales Force'
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
      description: 'Undergraduate',
      start_date: 2010,
      end_date: 2012,
      organization: 'Yale'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user9
  .then((user) => {
    return models.Users.forge({
      full_name: 'Brad Pitt',
      industry: 'Health Care',
      github_url: 'https://github.com/bradpitt',
      linkedin_url: 'https://www.linkedin.com/in/bradpitt/',
      image: 'http://img.usmagazine.com/article-leads-vertical-300/1250530894_brad_pitt_290x402.jpg',
      summary: 'I am a technical writer',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'bradpitt',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 9,
      name: 'professional',
      role: 'Technical Writer',
      description: 'I like to write about projects or products',
      start_date: 2011,
      end_date: 2017,
      organization: 'facebook'
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
      description: 'I am educated',
      start_date: 2010,
      end_date: 2012,
      organization: 'Havard'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user10
  .then((user) => {
    return models.Users.forge({
      full_name: 'Kevin Spacey',
      industry: 'Internet',
      github_url: 'https://github.com/kevinspacey',
      linkedin_url: 'https://www.linkedin.com/in/kevinspacey/',
      image: 'https://static01.nyt.com/images/2017/05/30/arts/04SPACEY1/04SPACEY1-master1050-v2.jpg',
      summary: 'I am a quality assurance engineer',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'Kevin Spacey',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 10,
      name: 'professional',
      role: 'Quality Assurance Engineer',
      description: 'I like to test projects or products',
      start_date: 2011,
      end_date: 2017,
      organization: 'Google'
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
      description: 'Bachelor of Engineering',
      start_date: 2011,
      end_date: 2014,
      organization: 'Yale'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .catch(() => {
    console.log('WARNING: defualt user already exists.');
  })

  // user11
  .then((user) => {
    return models.Users.forge({
      full_name: 'Robin Wright',
      industry: 'Software Engineering',
      github_url: 'https://github.com/robinwright',
      linkedin_url: 'https://www.linkedin.com/in/robinwright/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBijA6VeZtXtwD7cPkfwRCngtxeOPer1hv5L16YKYDC1pdxVylcxKkA',
      summary: 'I am a project manager',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'Robin Wright',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 11,
      name: 'professional',
      role: 'Senior Project Manager',
      description: 'I like to manage people',
      start_date: 2013,
      end_date: 2016,
      organization: 'Cisco'
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
      description: 'Bachelor of Arts',
      start_date: 2012,
      end_date: 2016,
      organization: 'California'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user12
  .then((user) => {
    return models.Users.forge({
      full_name: 'Martha Stewart',
      industry: 'Insider Trading',
      github_url: 'https://github.com/marthastewart',
      linkedin_url: 'https://www.linkedin.com/in/marthastewart/',
      image: 'https://assets.entrepreneur.com/content/16x9/822/4-secrets-lifelong-success-martha-stewart.jpg',
      summary: 'I manipulate stocks',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'Martha Stewart',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 12,
      name: 'professional',
      role: 'Midlevel Money Grabber',
      description: 'I like to insider trade',
      start_date: 2010,
      end_date: 2013,
      organization: 'NYSE'
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
      role: 'Some project',
      description: 'An app that steals money from people!',
      start_date: 2014,
      end_date: null,
      organization: 'New York'
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
      description: 'Bachelor of Money',
      start_date: 2001,
      end_date: 2012,
      organization: 'Trump University'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user13
  .then((user) => {
    return models.Users.forge({
      full_name: 'Homer Simpson',
      industry: 'Nuclear Engineering',
      github_url: 'https://github.com/homersimpson',
      linkedin_url: 'https://www.linkedin.com/in/homesimpson/',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
      summary: 'I eat donuts',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'Homer Simpson',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 13,
      name: 'professional',
      role: 'Nuclear Safety',
      description: 'Monitor power plants',
      start_date: 2000,
      end_date: null,
      organization: 'Burns Co.'
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
      role: 'Donut eating contest',
      description: 'An app that counts donuts',
      start_date: 2012,
      end_date: 2013,
      organization: 'Self-employed'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  // .then((experience) => {
  //   return models.Experience.forge({
  //     users_id: 13,
  //     name: 'education',
  //     role: 'Student',
  //     description: 'Doctor of Donuts',
  //     start_date: 1998,
  //     end_date: 2006,
  //     organization: 'Donuts College of Math and Physics'
  //   }).save()
  // })
  // .error(err => {
  //   console.error('ERROR: failed to create experience');
  //   throw err;
  // })



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



  .catch(() => {
    console.log('WARNING: defualt user already exists.');
  });
};




// copy users (id, full_name, industry) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/users.csv' delimiter ',' csv header;

// copy connection (users_a_id, users_b_id, status) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/connection.csv' delimiter ',' csv header;

// copy experience (users_id, name, role, organization) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/experience.csv' delimiter ',' csv header;




// copy users (id, full_name, industry) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/users.csv' delimiter ',' csv header;

// copy connection (users_a_id, users_b_id, status) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/connection.csv' delimiter ',' csv header;

// copy experience (users_id, name, role, organization) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/experience.csv' delimiter ',' csv header;
