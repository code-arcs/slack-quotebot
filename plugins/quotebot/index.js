'use strict';

exports.register = function (server, options, next) {

    server.route({
        method: 'POST',
        path: '/quoteBot',
        handler: (request, reply) => {

            for (let i = 0; i < options.plugins.length; i++) {

                new options.plugins[i](request.payload, (res)=> {
                    if (res) {
                        reply(res);
                    }
                });

                if(reply._replied){
                    break;
                }
            }
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};