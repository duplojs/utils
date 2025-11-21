'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../pattern/result.cjs');
var nullable$1 = require('../parsers/nullable.cjs');

function nullable(inner, definition) {
    return baseExtended.dataParserExtendedInit(nullable$1.nullable(inner, definition), {});
}

exports.nullable = nullable;
