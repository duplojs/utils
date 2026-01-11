'use strict';

var baseExtended = require('../baseExtended.cjs');
var recover$1 = require('../parsers/recover.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/recover/index.md}
 */
function recover(inner, recoveredValue, definition) {
    const self = baseExtended.dataParserExtendedInit(recover$1.recover(inner, recoveredValue, definition), {});
    return recover.overrideHandler.apply(self);
}
recover.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/recover");

exports.recover = recover;
