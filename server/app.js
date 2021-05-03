const express = require('express');
const open = require('open');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const expressSession = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config();
const authRouter = require('./auth');

const app = express();
app.use(cors());
app.use(express.static('docs'));

// create express app

// Setup server port
const port = process.env.PORT || 8000;

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

if (app.get('env') === 'production') {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
  },
  ((accessToken, refreshToken, extraParams, profile, done) => done(null, profile)
  ),
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route

// Require employee routes
const citiesRoutes = require('./routes/cities.routes');

// using as middleware
app.use('/api/v1/cities', citiesRoutes);
app.use('/', authRouter);

app.set('port', process.env.PORT || 8000);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');

app.listen(app.get('port'), () => {
  console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
  open('http://localhost:8000/login');
});
