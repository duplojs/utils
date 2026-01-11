'use strict';

var baseExtended = require('../baseExtended.cjs');
var nil$1 = require('../parsers/nil.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/nil/index.md}
 */
function nil(definition) {
    const self = baseExtended.dataParserExtendedInit(nil$1.nil(definition), {});
    return nil.overrideHandler.apply(self);
}
nil.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/nil");

exports.nil = nil;
