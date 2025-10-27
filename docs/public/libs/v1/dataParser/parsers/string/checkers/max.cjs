'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerStringMaxKind = kind.createKind("data-parser-checker-string-max");
function checkerStringMax(max, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerStringMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => value.length <= self.definition.max ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerStringMax = checkerStringMax;
exports.dataParserCheckerStringMaxKind = dataParserCheckerStringMaxKind;
