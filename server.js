const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const jwt = require('jsonwebtoken');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const api = require('./servers/routes/api');
const scheduler = require('./servers/functions/M_Schedule.function');


// connect to MongoDb
var mongoDBURL = config.url;
var options = {
    useNewUrlParser: true,
    //autoReconnect: true,
    autoIndex: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

}

mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDBURL, options)
// .then(
//     () => { console.log('MongoDB connection success') },
//     err => { console.log('MongoDB connection error:') }
//   );
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('MongoDB connection success');
});


// Config
app.set('superSecret', config.secret);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, '/assets/images')));
app.use('/static', express.static(path.join(__dirname, '/assets')));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    //res.setHeader('Authorization', 'Bearer C6SRGWEPG2BA3WNCA5JI3IHWNS4O4TDU');

    // Pass to next layer of middleware
    next();
});


// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);


// Socket io
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    //console.log('socket: a user connnecting!');
    socket.on('disconnect', () => {
        io.emit('user disconnected');
        //console.log('socket: a user disconected!');
    });
});

exports.callsocket = (name, data) => {
    if (name == 'live_chat')
        io.emit('live_chat', data);

    if (name == 'support_request')
        io.emit('support_request', data);

    if (name == 'notification')
        io.emit('notification', data);

    return;
}

server.listen(port, () => {
    scheduler.scheduleJob("hello");
    console.log(`Server is running on localhost:${port}`);
   
});


