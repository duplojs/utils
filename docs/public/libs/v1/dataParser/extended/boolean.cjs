'use strict';

var baseExtended = require('../baseExtended.cjs');
var boolean$1 = require('../parsers/boolean.cjs');
var override = require('../../common/override.cjs');

function boolean(definition) {
    const self = baseExtended.dataParserExtendedInit(boolean$1.boolean(definition), {});
    return boolean.overrideHandler.apply(self);
}
boolean.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/boolean");

exports.boolean = boolean;
