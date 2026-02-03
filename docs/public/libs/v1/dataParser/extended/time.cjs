'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/time/index.cjs');
var max = require('../parsers/time/checkers/max.cjs');
var min = require('../parsers/time/checkers/min.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/time/index.md}
 */
function time(definition) {
    const self = baseExtended.dataParserExtendedInit(index.time(definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerTimeMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerTimeMax(max$1, definition));
        },
    }, time.overrideHandler);
    return self;
}
time.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/time");

exports.time = time;
