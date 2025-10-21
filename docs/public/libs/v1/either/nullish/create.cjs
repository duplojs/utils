'use strict';

var empty = require('./empty.cjs');
var filled = require('./filled.cjs');

function nullish(value) {
    return value === null || value === undefined
        ? empty.nullishEmpty(value)
        : filled.nullishFilled(value);
}

exports.nullish = nullish;
