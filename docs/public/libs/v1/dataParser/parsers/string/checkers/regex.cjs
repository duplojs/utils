'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerRegexKind = kind.createDataParserKind("checker-regex");
class DataParserCheckerRegex extends baseChecker.DataParserCheckerBase.init(checkerRegexKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerRegex);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        return self.definition.regex.test(data)
            ? data
            : error.addIssue(error$1, `string with pattern ${self.definition.regex.source.toString()}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(regex, definition = {}) {
        return new DataParserCheckerRegex({
            ...definition,
            regex,
        });
    }
}
const checkerRegex = detachObjectMethod.detachObjectMethod(DataParserCheckerRegex, "create");

exports.DataParserCheckerRegex = DataParserCheckerRegex;
exports.checkerRegex = checkerRegex;
exports.checkerRegexKind = checkerRegexKind;
