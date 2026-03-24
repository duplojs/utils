'use strict';

var _break = require('./theFlow/break.cjs');

function* breakIf(value, thePredicate) {
    if (thePredicate(value) === true) {
        yield _break.createBreak(value);
    }
    else {
        return value;
    }
}

exports.breakIf = breakIf;
