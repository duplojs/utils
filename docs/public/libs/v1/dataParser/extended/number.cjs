'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var index = require('../parsers/number/index.cjs');
require('../../pattern/result.cjs');
var int$1 = require('../parsers/number/checkers/int.cjs');
var max = require('../parsers/number/checkers/max.cjs');
var min = require('../parsers/number/checkers/min.cjs');

function number(definition) {
    return baseExtended.dataParserExtendedInit(index.number(definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerNumberMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerNumberMax(max$1, definition));
        },
    });
}
function int(definition) {
    return number({
        checkers: [int$1.checkerInt(definition)],
    });
}

exports.int = int;
exports.number = number;
