'use strict';

var number$1 = require('../number.cjs');

function number(definition) {
    return number$1.number({
        ...definition,
        coerce: true,
    });
}

exports.number = number;
