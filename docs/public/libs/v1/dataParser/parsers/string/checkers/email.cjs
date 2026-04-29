'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var index = require('../index.cjs');
var kind = require('../../../kind.cjs');

const checkerEmailKind = kind.createDataParserKind("checker-email");
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
function checkerEmail(definition = {}) {
    return base.dataParserCheckerInit(checkerEmailKind, {
        definition: {
            ...definition,
            regex: emailRegex,
        },
    }, (data, error$1, self, dataParser) => self.definition.regex.test(data)
        ? data
        : error.addIssue(error$1, "email", data, self.definition.errorMessage ?? dataParser.definition.errorMessage));
}
function email(definition) {
    return index.string({
        checkers: [checkerEmail(definition)],
    });
}

exports.checkerEmail = checkerEmail;
exports.checkerEmailKind = checkerEmailKind;
exports.email = email;
