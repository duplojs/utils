'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerArrayMinKind = kind.createDataParserKind("checker-array-min");
function checkerArrayMin(min, definition = {}) {
    return base.dataParserCheckerInit(checkerArrayMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (data, error$1, self, dataParser) => data.length >= self.definition.min
        ? data
        : error.addIssue(error$1, `array.length >= ${self.definition.min}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage));
}

exports.checkerArrayMin = checkerArrayMin;
exports.checkerArrayMinKind = checkerArrayMinKind;
