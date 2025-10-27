'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerStringMinKind = kind.createKind("data-parser-checker-string-min");
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
