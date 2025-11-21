'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../pattern/result.cjs');
var unknown$1 = require('../parsers/unknown.cjs');

function unknown(definition) {
    return baseExtended.dataParserExtendedInit(unknown$1.unknown(definition), {});
}

exports.unknown = unknown;
