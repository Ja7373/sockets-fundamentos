//

const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario Conectado');
    //console.log('client: ', client);

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log('Mensaje:', data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo OK'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo Mal :('
        //     });
        // }
    });
});