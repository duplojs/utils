'use strict';

var index = require('../bigint/index.cjs');

function bigint(definition) {
    return index.bigint({
        ...definition,
        coerce: true,
    });
}

exports.bigint = bigint;
