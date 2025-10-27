'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerNumberMinKind = kind.createKind("data-parser-checker-number-min");
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
