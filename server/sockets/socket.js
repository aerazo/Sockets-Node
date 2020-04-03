const { io } = require('../server');

io.on('connection', (client) => {
    console.log('user connected!');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenido a node'
    });

    client.on('disconnect', () => {
        console.log('user disconnected!');
    });

    //escuchar cliente
    client.on('enviarMensaje', (msg, callback) => {
        console.log(msg);
        callback('ok!');
    });

});