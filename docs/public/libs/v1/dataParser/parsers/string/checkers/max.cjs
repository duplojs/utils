'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerStringMaxKind = kind.createDataParserKind("checker-string-max");
function checkerStringMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerStringMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => value.length <= self.definition.max ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerStringMax = checkerStringMax;
exports.checkerStringMaxKind = checkerStringMaxKind;
