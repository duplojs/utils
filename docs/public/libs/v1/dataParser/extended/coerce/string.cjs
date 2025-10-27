'use strict';

var string$1 = require('../string.cjs');
require('../../../pattern/result.cjs');

function string(definition) {
    return string$1.string({
        ...definition,
        coerce: true,
    });
}

exports.string = string;
