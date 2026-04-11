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
    }, (value, error$1, self) => value.length >= self.definition.min
        ? value
        : error.addIssue(error$1, `string.length >= ${self.definition.min}`, value, self.definition.errorMessage));
}

exports.checkerStringMin = checkerStringMin;
exports.checkerStringMinKind = checkerStringMinKind;
