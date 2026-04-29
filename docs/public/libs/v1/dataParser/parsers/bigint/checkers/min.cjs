'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerBigIntMinKind = kind.createDataParserKind("checker-bigint-min");
function checkerBigIntMin(min, definition = {}) {
    return base.dataParserCheckerInit(checkerBigIntMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, error$1, self, dataParser) => {
        if (value < self.definition.min) {
            return error.addIssue(error$1, `bigint >= ${self.definition.min}n`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
        }
        return value;
    });
}

exports.checkerBigIntMin = checkerBigIntMin;
exports.checkerBigIntMinKind = checkerBigIntMinKind;
