'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var union$1 = require('../parsers/union.cjs');
require('../../pattern/result.cjs');

function union(options, definition) {
    return baseExtended.dataParserExtendedInit(union$1.union(options, definition), {});
}

exports.union = union;
