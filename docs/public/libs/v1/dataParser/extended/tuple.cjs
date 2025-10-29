'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var tuple$1 = require('../parsers/tuple.cjs');
require('../../pattern/result.cjs');

function tuple(shape, definition) {
    return baseExtended.dataParserExtendedInit(tuple$1.tuple(shape, definition), {});
}

exports.tuple = tuple;
