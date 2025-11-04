'use strict';

var empty = require('./empty.cjs');
var filled = require('./filled.cjs');

function nullable(value) {
    return value === null
        ? empty.nullableEmpty()
        : filled.nullableFilled(value);
}

exports.nullable = nullable;
