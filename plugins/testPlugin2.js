"use strict";

class Test {
    constructor(message, next ) {
            next(JSON.stringify(message)+ ' test 2');

    }
}

exports = module.exports =  Test;