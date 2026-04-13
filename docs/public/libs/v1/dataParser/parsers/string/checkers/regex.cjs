'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerRegexKind = kind.createDataParserKind("checker-regex");
function checkerRegex(regex, definition = {}) {
    return base.dataParserCheckerInit(checkerRegexKind, {
        definition: {
            ...definition,
            regex,
        },
    }, (data, error$1, self) => self.definition.regex.test(data)
        ? data
        : error.addIssue(error$1, `string with pattern ${self.definition.regex.source.toString()}`, data, self.definition.errorMessage));
}

exports.checkerRegex = checkerRegex;
exports.checkerRegexKind = checkerRegexKind;
