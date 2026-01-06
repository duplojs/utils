'use strict';

var index = require('../time/index.cjs');

function time(definition) {
    return index.time({
        ...definition,
        coerce: true,
    });
}

exports.time = time;
