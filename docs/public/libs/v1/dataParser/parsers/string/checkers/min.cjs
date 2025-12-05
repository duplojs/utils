'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerStringMinKind = kind.createDataParserKind("checker-string-min");
function checkerStringMin(min, definition = {}) {
    return base.dataParserCheckerInit(checkerStringMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => value.length >= self.definition.min ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerStringMin = checkerStringMin;
exports.checkerStringMinKind = checkerStringMinKind;
