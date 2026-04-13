'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerStringMinKind = kind.createDataParserKind("checker-string-min");
function checkerStringMin(min, definition = {}) {
    return base.dataParserCheckerInit(checkerStringMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (data, error$1, self) => data.length >= self.definition.min
        ? data
        : error.addIssue(error$1, `string.length >= ${self.definition.min}`, data, self.definition.errorMessage));
}

exports.checkerStringMin = checkerStringMin;
exports.checkerStringMinKind = checkerStringMinKind;
