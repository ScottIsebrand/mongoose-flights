// Require modules
require('dotenv').config();
const express = require('express');
const connectToDB = require('./config/db');
// Require (Bring in) the DATA
const Flight = require('./models/Flight');
// Create the Express app
const app = express();

// === TEMPLATE ENGINES configurations/settings
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// === MIDDLEWARE (app.use); parsess the data from the request; makes data accessible
app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   console.log(req.url);
//   next();
// });

// === ROUTES
// Route: Homepage message
app.get('/', (req, res) => {
  res.send('<h1>Welcome to a world of flights.</h1>');
});

// Route: INDEX (ie HTTP verb is GET; action is index; Mongoose func. is .find; CRUD op is Read)
app.get('/flights', (req, res) => {
  Flight.find({}, (error, allFlights) => {
    res.render('Index', { flights: allFlights });
  });
});

// Route: POST flight/document (ie HTTP verb is POST; action is create; Mongoose func. is .create; CRUD op is Create)
app.post('/flights', (req, res) => {
  Flight.create(req.body, (error, createdFlight) => {
    res.redirect('/flights');
  });
});

// Route: return a form to create new flight (ie HTTP verb is GET; action 'new')
app.get('/flights/new', (req, res) => {
  res.render('New');
});

// Route: render 404 page
app.get('*', (req, res) => {
  // res.redirect('/fruits');
  res.render('404');
});

//* LISTENING at port 3000
app.listen(3000, () => {
  console.log('Server is up!');
  connectToDB();
});
