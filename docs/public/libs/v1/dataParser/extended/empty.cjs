'use strict';

var baseExtended = require('../baseExtended.cjs');
var empty$1 = require('../parsers/empty.cjs');
require('../../pattern/result.cjs');

function empty(definition) {
    return baseExtended.dataParserExtendedInit(empty$1.empty(definition), {});
}

exports.empty = empty;
