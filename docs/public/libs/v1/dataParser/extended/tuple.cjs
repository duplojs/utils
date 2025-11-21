'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var min = require('../parsers/array/checkers/min.cjs');
var max = require('../parsers/array/checkers/max.cjs');
var tuple$1 = require('../parsers/tuple.cjs');
require('../../pattern/result.cjs');

function tuple(shape, definition) {
    return baseExtended.dataParserExtendedInit(tuple$1.tuple(shape, definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerArrayMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerArrayMax(max$1, definition));
        },
    });
}

exports.tuple = tuple;
