'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/bigint/index.cjs');
var max = require('../parsers/bigint/checkers/max.cjs');
var min = require('../parsers/bigint/checkers/min.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/bigint/index.md}
 */
function bigint(definition) {
    const self = baseExtended.dataParserExtendedInit(index.bigint(definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerBigIntMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerBigIntMax(max$1, definition));
        },
    }, bigint.overrideHandler);
    return self;
}
bigint.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/bigint");

exports.bigint = bigint;
