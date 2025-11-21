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
    }, (value, self) => {
        if (value > self.definition.max) {
            return error.SymbolDataParserErrorIssue;
        }
        return value;
    });
}

exports.checkerBigIntMax = checkerBigIntMax;
exports.checkerBigIntMaxKind = checkerBigIntMaxKind;
