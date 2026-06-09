'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerStringMaxKind = kind.createDataParserKind("checker-string-max");
class DataParserCheckerStringMax extends baseChecker.DataParserCheckerBase.init(checkerStringMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerStringMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        return data.length <= self.definition.max
            ? data
            : error.addIssue(error$1, `string.length <= ${self.definition.max}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(max, definition = {}) {
        return new DataParserCheckerStringMax({
            ...definition,
            max,
        });
    }
}
const checkerStringMax = detachObjectMethod.detachObjectMethod(DataParserCheckerStringMax, "create");

exports.DataParserCheckerStringMax = DataParserCheckerStringMax;
exports.checkerStringMax = checkerStringMax;
exports.checkerStringMaxKind = checkerStringMaxKind;
