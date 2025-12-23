'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerNumberMaxKind = kind.createDataParserKind("checker-number-max");
function checkerNumberMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerNumberMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => value <= self.definition.max ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerNumberMax = checkerNumberMax;
exports.checkerNumberMaxKind = checkerNumberMaxKind;
