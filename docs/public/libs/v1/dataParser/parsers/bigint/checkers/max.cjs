'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerBigIntMaxKind = kind.createKind("data-parser-checker-bigint-max");
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
