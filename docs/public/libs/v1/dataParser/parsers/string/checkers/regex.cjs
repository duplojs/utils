'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerStringRegexKind = kind.createKind("data-parser-checker-string-regex");
function checkerStringRegex(regex, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerStringRegexKind, {
        definition: {
            ...definition,
            regex,
        },
    }, (value, self) => self.definition.regex.test(value)
        ? value
        : error.SymbolDataParserErrorIssue);
}

exports.checkerStringRegex = checkerStringRegex;
exports.dataParserCheckerStringRegexKind = dataParserCheckerStringRegexKind;
