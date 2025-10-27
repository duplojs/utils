'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerNumberMaxKind = kind.createKind("data-parser-checker-number-max");
function checkerNumberMax(max, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerNumberMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => value <= self.definition.max ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerNumberMax = checkerNumberMax;
exports.dataParserCheckerNumberMaxKind = dataParserCheckerNumberMaxKind;
