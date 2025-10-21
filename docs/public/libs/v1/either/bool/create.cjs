'use strict';

var falsy = require('./falsy.cjs');
var truthy = require('./truthy.cjs');

function bool(value) {
    return value === undefined
        || value === null
        || value === 0
        || value === ""
        || value === false
        ? falsy.boolFalsy(value)
        : truthy.boolTruthy(value);
}

exports.bool = bool;
