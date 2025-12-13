'use strict';

var constants = require('./constants.cjs');

function is(input) {
    return constants.theDateRegex.test(input);
}

exports.is = is;
