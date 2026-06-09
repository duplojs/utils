'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerNumberMaxKind = kind.createDataParserKind("checker-number-max");
class DataParserCheckerNumberMax extends baseChecker.DataParserCheckerBase.init(checkerNumberMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerNumberMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error$1, self, dataParser) {
        const isValid = self.definition.exclusive
            ? value < self.definition.max
            : value <= self.definition.max;
        if (isValid) {
            return value;
        }
        return error.addIssue(error$1, `number ${self.definition.exclusive ? "<" : "<="} ${self.definition.max}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(max, definition = {}) {
        return new DataParserCheckerNumberMax({
            ...definition,
            exclusive: definition.exclusive ?? false,
            max,
        });
    }
}
const checkerNumberMax = detachObjectMethod.detachObjectMethod(DataParserCheckerNumberMax, "create");

exports.DataParserCheckerNumberMax = DataParserCheckerNumberMax;
exports.checkerNumberMax = checkerNumberMax;
exports.checkerNumberMaxKind = checkerNumberMaxKind;
