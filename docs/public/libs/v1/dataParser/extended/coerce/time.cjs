'use strict';

var time$1 = require('../time.cjs');

function time(definition) {
    return time$1.time({
        ...definition,
        coerce: true,
    });
}

exports.time = time;
