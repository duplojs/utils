'use strict';

var baseExtended = require('../baseExtended.cjs');
var boolean$1 = require('../parsers/boolean.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/boolean/index.md}
 */
function boolean(definition) {
    const self = baseExtended.dataParserExtendedInit(boolean$1.boolean(definition), {}, boolean.overrideHandler);
    return self;
}
boolean.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/boolean");

exports.boolean = boolean;
