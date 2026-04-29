'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerBigIntMaxKind = kind.createDataParserKind("checker-bigint-max");
function checkerBigIntMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerBigIntMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, error$1, self, dataParser) => {
        if (value > self.definition.max) {
            return error.addIssue(error$1, `bigint <= ${self.definition.max}n`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
        }
        return value;
    });
}

exports.checkerBigIntMax = checkerBigIntMax;
exports.checkerBigIntMaxKind = checkerBigIntMaxKind;
