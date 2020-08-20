var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
// Enviar Información
socket.emit('enviarMensaje', {
    usuario: 'javier',
    mensaje: 'Hola Mundo'
}, function(resp) {

    console.log('Respuesta Server: ', resp);
});

// Escuchar Información
socket.on('enviarMensaje', function(data) {
    console.log('Servidor:', data);
});