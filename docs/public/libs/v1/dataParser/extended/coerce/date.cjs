'use strict';

var date$1 = require('../date.cjs');

function date(definition) {
    return date$1.date({
        ...definition,
        coerce: true,
    });
}

exports.date = date;
