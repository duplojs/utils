'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../pattern/result.cjs');
var index = require('../parsers/record/index.cjs');

function record(key, value, definition) {
    return baseExtended.dataParserExtendedInit(index.record(key, value, definition), {});
}

exports.record = record;
