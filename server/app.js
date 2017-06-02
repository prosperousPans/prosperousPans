'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(middleware.auth.session);
// app.use(middleware.passport.initialize());
// app.use(middleware.passport.session());
// app.use(middleware.flash());

app.use(express.static(path.join(__dirname, '../public')));

// *** FOR PASSPORT AUTH ***
// app.use('/', routes.auth);
// app.use('/', routes.api);
// app.use('/api', routes.api);
// app.use('/api/profiles', routes.profiles);

// *** FOR RETRIEVING USERS
app.use('/users', routes.users);
app.use('/experience', routes.experience);

// *** FOR INSERTING NEW CONNECTIONS
app.use('/connection', routes.connection);


module.exports = app;
