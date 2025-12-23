'use strict';

var baseExtended = require('../baseExtended.cjs');
var date$1 = require('../parsers/date.cjs');
var override = require('../../common/override.cjs');

function date(definition) {
    const self = baseExtended.dataParserExtendedInit(date$1.date(definition), {});
    return date.overrideHandler.apply(self);
}
date.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/date");

exports.date = date;
