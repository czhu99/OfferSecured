// Get the packages we need
var express = require('express'),
    //router = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

require('dotenv').config();

// Create our Express application
var app = express();

// Use environment defined port or 4000
var port = process.env.PORT || 4000;

// Connect to a MongoDB
const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri,  { useNewUrlParser: true });

// Allow CORS so that backend and frontend could be put on different servers
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Use routes as a module (see index.js)
// require('./routes')(app, router);

const queuesRouter = require('./routes/queues');
const usersRouter = require('./routes/users');

app.use('/queues', queuesRouter);
app.use('/users', usersRouter);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);

//DB Setup
var dataBase = mongoose.connection;
dataBase.on('error', console.error.bind(console, 'connection error:'));

dataBase.once('open', function() {
  console.log("DB connection alive");
});