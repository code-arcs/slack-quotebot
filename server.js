'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({port: 3000, host: 'localhost'});

// load multiple plugins
server.register([{
        register: require('./plugins/quotebot'),
        options: {plugins: [require('./plugins/testPlugin'), require('./plugins/testPlugin2')]}
    }],
    (err) => {
        if (err) {
            console.error('Failed to load a plugin:', err);
        }
    });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});