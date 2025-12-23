'use strict';

var bigint$1 = require('../bigint.cjs');

function bigint(definition) {
    return bigint$1.bigint({
        ...definition,
        coerce: true,
    });
}

exports.bigint = bigint;
