'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var greaterTime = require('../../../../date/operators/greaterTime.cjs');

const checkerTimeMinKind = kind.createDataParserKind("checker-time-min");
function checkerTimeMin(min, definition = {}) {
    return base.dataParserCheckerInit(checkerTimeMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => greaterTime.greaterTime(value, self.definition.min) ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerTimeMin = checkerTimeMin;
exports.checkerTimeMinKind = checkerTimeMinKind;
