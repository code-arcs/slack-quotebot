"use strict";

class Test {
    constructor(message, next) {
        if(message=== 'hallo'){
            next(message + 'test 1');
        } else {
            next();
        }
    }
}

exports = module.exports =  Test;