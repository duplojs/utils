'use strict';

var error = require('../../../error.cjs');
var index = require('../index.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerEmailKind = kind.createDataParserKind("checker-email");
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
class DataParserCheckerEmail extends baseChecker.DataParserCheckerBase.init(checkerEmailKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerEmail);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        return self.definition.regex.test(data)
            ? data
            : error.addIssue(error$1, "email", data, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    static create(definition = {}) {
        return new DataParserCheckerEmail({
            ...definition,
            regex: emailRegex,
        });
    }
}
const checkerEmail = detachObjectMethod.detachObjectMethod(DataParserCheckerEmail, "create");
function email(definition) {
    return index.string({
        checkers: [checkerEmail(definition)],
    });
}

exports.DataParserCheckerEmail = DataParserCheckerEmail;
exports.checkerEmail = checkerEmail;
exports.checkerEmailKind = checkerEmailKind;
exports.email = email;
