'use strict';

var unwrap = require('../common/unwrap.cjs');

function exhaustive(result) {
    return unwrap.unwrap(result);
}

exports.exhaustive = exhaustive;
