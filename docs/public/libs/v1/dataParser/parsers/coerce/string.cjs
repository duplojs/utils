'use strict';

var index = require('../string/index.cjs');
require('../../../pattern/result.cjs');

function string(definition) {
    return index.string({
        ...definition,
        coerce: true,
    });
}

exports.string = string;
