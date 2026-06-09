'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerArrayMaxKind = kind.createDataParserKind("checker-array-max");
class DataParserCheckerArrayMax extends baseChecker.DataParserCheckerBase.init(checkerArrayMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerArrayMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        return data.length <= self.definition.max
            ? data
            : error.addIssue(error$1, `array.length <= ${self.definition.max}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(max, definition = {}) {
        return new DataParserCheckerArrayMax({
            ...definition,
            max,
        });
    }
}
const checkerArrayMax = detachObjectMethod.detachObjectMethod(DataParserCheckerArrayMax, "create");

exports.DataParserCheckerArrayMax = DataParserCheckerArrayMax;
exports.checkerArrayMax = checkerArrayMax;
exports.checkerArrayMaxKind = checkerArrayMaxKind;
