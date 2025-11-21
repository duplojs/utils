'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var index = require('../parsers/bigint/index.cjs');
require('../../pattern/result.cjs');
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
