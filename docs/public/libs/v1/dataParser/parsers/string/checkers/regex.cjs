'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerStringRegexKind = kind.createDataParserKind("checker-string-regex");
function checkerStringRegex(regex, definition = {}) {
    return base.dataParserCheckerInit(checkerStringRegexKind, {
        definition: {
            ...definition,
            regex,
        },
    }, (value, self) => self.definition.regex.test(value)
        ? value
        : error.SymbolDataParserErrorIssue);
}

exports.checkerStringRegex = checkerStringRegex;
exports.checkerStringRegexKind = checkerStringRegexKind;
