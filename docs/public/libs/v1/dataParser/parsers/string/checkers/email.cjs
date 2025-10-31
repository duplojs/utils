'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var index = require('../index.cjs');
var kind = require('../../../kind.cjs');

const dataParserCheckerEmailKind = kind.createDataParserKind("checker-string-email");
const emailPattern = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
function checkerEmail(definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerEmailKind, {
        definition: {
            ...definition,
            pattern: emailPattern,
        },
    }, (input, self) => {
        if (!self.definition.pattern.test(input)) {
            return error.SymbolDataParserErrorIssue;
        }
        return self.definition.normalize ? input.toLowerCase() : input;
    });
}
function email(definition) {
    return index.string({
        checkers: [checkerEmail(definition)],
    });
}

exports.checkerEmail = checkerEmail;
exports.dataParserCheckerEmailKind = dataParserCheckerEmailKind;
exports.email = email;
