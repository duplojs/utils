'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/record/index.cjs');
var override = require('../../common/override.cjs');

function record(key, value, definition) {
    const self = baseExtended.dataParserExtendedInit(index.record(key, value, definition), {});
    return record.overrideHandler.apply(self);
}
record.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/record");

exports.record = record;
