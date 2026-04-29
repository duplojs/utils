'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerNumberMinKind = kind.createDataParserKind("checker-number-min");
function checkerNumberMin(min, definition = {}) {
    return base.dataParserCheckerInit(checkerNumberMinKind, {
        definition: {
            ...definition,
            exclusive: definition.exclusive ?? false,
            min,
        },
    }, (value, error$1, self, dataParser) => {
        const isValid = self.definition.exclusive
            ? value > self.definition.min
            : value >= self.definition.min;
        if (isValid) {
            return value;
        }
        return error.addIssue(error$1, `number ${self.definition.exclusive ? ">" : ">="} ${self.definition.min}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    });
}

exports.checkerNumberMin = checkerNumberMin;
exports.checkerNumberMinKind = checkerNumberMinKind;
