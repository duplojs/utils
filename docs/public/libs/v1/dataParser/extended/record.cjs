'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../../pattern/result.cjs');
var record$1 = require('../parsers/record.cjs');

function record(key, value, definition) {
    return baseExtended.dataParserExtendedInit(record$1.record(key, value, definition), {});
}

exports.record = record;
