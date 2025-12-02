'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/number/index.cjs');
var int$1 = require('../parsers/number/checkers/int.cjs');
var max = require('../parsers/number/checkers/max.cjs');
var min = require('../parsers/number/checkers/min.cjs');
var override = require('../../common/override.cjs');

function number(definition) {
    const self = baseExtended.dataParserExtendedInit(index.number(definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerNumberMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerNumberMax(max$1, definition));
        },
    });
    return number.overrideHandler.apply(self);
}
number.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/number");
function int(definition) {
    return number({
        checkers: [int$1.checkerInt(definition)],
    });
}

exports.int = int;
exports.number = number;
