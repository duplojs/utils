'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const dataParserCheckerBigIntMinKind = kind.createDataParserKind("checker-bigint-min");
function checkerBigIntMin(min, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerBigIntMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => {
        if (value < self.definition.min) {
            return error.SymbolDataParserErrorIssue;
        }
        return value;
    });
}

exports.checkerBigIntMin = checkerBigIntMin;
exports.dataParserCheckerBigIntMinKind = dataParserCheckerBigIntMinKind;
