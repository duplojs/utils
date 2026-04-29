'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerNumberMaxKind = kind.createDataParserKind("checker-number-max");
function checkerNumberMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerNumberMaxKind, {
        definition: {
            ...definition,
            exclusive: definition.exclusive ?? false,
            max,
        },
    }, (value, error$1, self, dataParser) => {
        const isValid = self.definition.exclusive
            ? value < self.definition.max
            : value <= self.definition.max;
        if (isValid) {
            return value;
        }
        return error.addIssue(error$1, `number ${self.definition.exclusive ? "<" : "<="} ${self.definition.max}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    });
}

exports.checkerNumberMax = checkerNumberMax;
exports.checkerNumberMaxKind = checkerNumberMaxKind;
