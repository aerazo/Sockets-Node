var socket = io();

socket.on('connect', function() {
    console.log('connected');
});

//escuchar
socket.on('disconnect', function() {
    console.log('lost connection');
});

//enviar
socket.emit('enviarMensaje', {
    usuario: 'Alejandro',
    mensaje: 'Hola'
}, function(data) {
    console.log(data);
});

socket.on('enviarMensaje', function(data) {
    console.log(data);
});