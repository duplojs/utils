'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerNumberMinKind = kind.createDataParserKind("checker-number-min");
function checkerNumberMin(min, definition = {}) {
    return base.dataParserCheckerInit(checkerNumberMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, error$1, self) => value >= self.definition.min
        ? value
        : error.addIssue(error$1, `number >= ${self.definition.min}`, value, self.definition.errorMessage));
}

exports.checkerNumberMin = checkerNumberMin;
exports.checkerNumberMinKind = checkerNumberMinKind;
