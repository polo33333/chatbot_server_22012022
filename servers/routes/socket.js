const express = require('express');
const router = express.Router();
const app = express();

// module.exports = function (io) {

//     io.on('connection', (socket) => {
//         console.log('user connected:' + socket.id);
//         socket.on('disconnect', () => {
//             console.log('user disconnected:' + socket.id);
//         });

//         socket.on('news', (msg) => {
//             console.log('message: ' + msg);
//         });

//         socket.emit('chat',{text: 'ahihi'});
//     });


//     return router;
// };
var x;


module.exports = {
    

    running: ()=>{
        var socket = app.get('socketio');
        console.log(socket)
        // io.on('connection', (socket) => {
        //     console.log('user connected:' + socket.id);
        //     socket.on('disconnect', () => {
        //         console.log('user disconnected:' + socket.id);
        //     });
        //     socket.emit('chat', { text: 'ahihi' });
        // });

        socket.emit('chat', { text: 'ahihi' });
    },
}


