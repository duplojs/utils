'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var lessTime = require('../../../../date/operators/lessTime.cjs');

const checkerTimeMaxKind = kind.createDataParserKind("checker-time-max");
/**
 * {@include dataParser/classic/checkerTimeMax/index.md}
 */
function checkerTimeMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerTimeMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => lessTime.lessTime(value, self.definition.max) ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerTimeMax = checkerTimeMax;
exports.checkerTimeMaxKind = checkerTimeMaxKind;
