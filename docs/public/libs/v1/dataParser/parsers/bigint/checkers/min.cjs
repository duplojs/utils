'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerBigIntMinKind = kind.createKind("data-parser-checker-bigint-min");
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
