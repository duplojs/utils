'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../parsers/string/index.cjs');
require('../parsers/object.cjs');
require('../parsers/number/index.cjs');
require('../parsers/date.cjs');
require('../parsers/literal.cjs');
require('../parsers/union.cjs');
require('../parsers/array/index.cjs');
var index = require('../parsers/bigint/index.cjs');
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
var max = require('../parsers/bigint/checkers/max.cjs');
var min = require('../parsers/bigint/checkers/min.cjs');

function bigint(definition) {
    return baseExtended.dataParserExtendedInit(index.bigint(definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerBigIntMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerBigIntMax(max$1, definition));
        },
    });
}

exports.bigint = bigint;
