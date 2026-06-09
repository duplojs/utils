'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerArrayMinKind = kind.createDataParserKind("checker-array-min");
class DataParserCheckerArrayMin extends baseChecker.DataParserCheckerBase.init(checkerArrayMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerArrayMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        return data.length >= self.definition.min
            ? data
            : error.addIssue(error$1, `array.length >= ${self.definition.min}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(min, definition = {}) {
        return new DataParserCheckerArrayMin({
            ...definition,
            min,
        });
    }
}
const checkerArrayMin = detachObjectMethod.detachObjectMethod(DataParserCheckerArrayMin, "create");

exports.DataParserCheckerArrayMin = DataParserCheckerArrayMin;
exports.checkerArrayMin = checkerArrayMin;
exports.checkerArrayMinKind = checkerArrayMinKind;
