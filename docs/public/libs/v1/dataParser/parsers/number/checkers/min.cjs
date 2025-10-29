'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const dataParserCheckerNumberMinKind = kind.createDataParserKind("checker-number-min");
function checkerNumberMin(min, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerNumberMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => value >= self.definition.min ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerNumberMin = checkerNumberMin;
exports.dataParserCheckerNumberMinKind = dataParserCheckerNumberMinKind;
