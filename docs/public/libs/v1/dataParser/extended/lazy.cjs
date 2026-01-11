'use strict';

var baseExtended = require('../baseExtended.cjs');
var lazy$1 = require('../parsers/lazy.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/lazy/index.md}
 */
function lazy(getter, definition) {
    const self = baseExtended.dataParserExtendedInit(lazy$1.lazy(getter, definition), {});
    return lazy.overrideHandler.apply(self);
}
lazy.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/lazy");

exports.lazy = lazy;
