'use strict';

var exit = require('./theFlow/exit.cjs');

function* exitIf(value, thePredicate) {
    if (thePredicate(value) === true) {
        yield exit.createExit(value);
    }
    else {
        return value;
    }
}

exports.exitIf = exitIf;
