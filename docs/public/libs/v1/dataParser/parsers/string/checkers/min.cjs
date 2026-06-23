'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerStringMinKind = kind.createDataParserKind("checker-string-min");
class DataParserCheckerStringMin extends baseChecker.DataParserCheckerBase.init(checkerStringMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerStringMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        return data.length >= self.definition.min
            ? data
            : error.addIssue(error$1, `string.length >= ${self.definition.min}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    static create(min, definition = {}) {
        return new DataParserCheckerStringMin({
            ...definition,
            min,
        });
    }
}
const checkerStringMin = detachObjectMethod.detachObjectMethod(DataParserCheckerStringMin, "create");

exports.DataParserCheckerStringMin = DataParserCheckerStringMin;
exports.checkerStringMin = checkerStringMin;
exports.checkerStringMinKind = checkerStringMinKind;
