'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/array/index.cjs');
require('../../pattern/result.cjs');
var max = require('../parsers/array/checkers/max.cjs');
var min = require('../parsers/array/checkers/min.cjs');

function array(element, definition) {
    return baseExtended.dataParserExtendedInit(index.array(element, definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerArrayMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerArrayMax(max$1, definition));
        },
    });
}

exports.array = array;
