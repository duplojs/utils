'use strict';

var baseExtended = require('../baseExtended.cjs');
var nil$1 = require('../parsers/nil.cjs');
require('../../pattern/result.cjs');

function nil(definition) {
    return baseExtended.dataParserExtendedInit(nil$1.nil(definition), {});
}

exports.nil = nil;
