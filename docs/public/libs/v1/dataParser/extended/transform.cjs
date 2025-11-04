'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var transform$1 = require('../parsers/transform.cjs');
require('../../pattern/result.cjs');

function transform(inner, theFunction, definition) {
    return baseExtended.dataParserExtendedInit(transform$1.transform(inner, theFunction, definition), {});
}

exports.transform = transform;
