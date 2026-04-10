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
    }, (value, error$1, self) => self.definition.regex.test(value)
        ? value
        : error.addIssue(error$1, `string with pattern ${self.definition.regex.source.toString()}`, value, self.definition.errorMessage));
}

exports.checkerStringRegex = checkerStringRegex;
exports.checkerStringRegexKind = checkerStringRegexKind;
