'use strict';

var empty = require('./empty.cjs');
var filled = require('./filled.cjs');

function optional(value) {
    return value === undefined
        ? empty.optionalEmpty()
        : filled.optionalFilled(value);
}

exports.optional = optional;
