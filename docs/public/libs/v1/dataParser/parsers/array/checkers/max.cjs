'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerArrayMaxKind = kind.createDataParserKind("checker-array-max");
function checkerArrayMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerArrayMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (data, error$1, self) => data.length <= self.definition.max
        ? data
        : error.addIssue(error$1, `array.length <= ${self.definition.max}`, data, self.definition.errorMessage));
}

exports.checkerArrayMax = checkerArrayMax;
exports.checkerArrayMaxKind = checkerArrayMaxKind;
