'use strict';

var baseExtended = require('../baseExtended.cjs');
var tuple$1 = require('../parsers/tuple.cjs');
var max = require('../parsers/array/checkers/max.cjs');
var min = require('../parsers/array/checkers/min.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/tuple/index.md}
 */
function tuple(shape, definition) {
    const self = baseExtended.dataParserExtendedInit(tuple$1.tuple(shape, definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerArrayMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerArrayMax(max$1, definition));
        },
    });
    return tuple.overrideHandler.apply(self);
}
tuple.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/tuple");

exports.tuple = tuple;
