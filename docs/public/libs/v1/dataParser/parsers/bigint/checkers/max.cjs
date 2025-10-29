'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const dataParserCheckerBigIntMaxKind = kind.createDataParserKind("checker-bigint-max");
function checkerBigIntMax(max, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerBigIntMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => {
        if (value > self.definition.max) {
            return error.SymbolDataParserErrorIssue;
        }
        return value;
    });
}

exports.checkerBigIntMax = checkerBigIntMax;
exports.dataParserCheckerBigIntMaxKind = dataParserCheckerBigIntMaxKind;
