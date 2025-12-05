'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/array/index.cjs');
var max = require('../parsers/array/checkers/max.cjs');
var min = require('../parsers/array/checkers/min.cjs');
var override = require('../../common/override.cjs');

function array(element, definition) {
    const self = baseExtended.dataParserExtendedInit(index.array(element, definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerArrayMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerArrayMax(max$1, definition));
        },
    });
    return array.overrideHandler.apply(self);
}
array.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/array");

exports.array = array;
