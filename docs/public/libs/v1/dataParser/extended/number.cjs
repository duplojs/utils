'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../parsers/string/index.cjs');
require('../parsers/object.cjs');
var index = require('../parsers/number/index.cjs');
require('../parsers/date.cjs');
require('../parsers/literal.cjs');
require('../parsers/union.cjs');
require('../parsers/array/index.cjs');
require('../parsers/bigint/index.cjs');
require('../parsers/tuple.cjs');
require('../parsers/transform.cjs');
require('../parsers/nil.cjs');
require('../parsers/boolean.cjs');
require('../parsers/empty.cjs');
require('../parsers/templateLiteral/index.cjs');
require('../parsers/pipe.cjs');
require('../parsers/optional.cjs');
require('../parsers/nullable.cjs');
require('../parsers/lazy.cjs');
require('../parsers/unknown.cjs');
require('../parsers/record/index.cjs');
require('../parsers/refine.cjs');
require('../parsers/recover.cjs');
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
