'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const dataParserCheckerStringMinKind = kind.createDataParserKind("checker-string-min");
function checkerStringMin(min, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerStringMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => value.length >= self.definition.min ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerStringMin = checkerStringMin;
exports.dataParserCheckerStringMinKind = dataParserCheckerStringMinKind;
