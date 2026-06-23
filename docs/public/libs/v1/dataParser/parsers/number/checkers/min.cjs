'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerNumberMinKind = kind.createDataParserKind("checker-number-min");
class DataParserCheckerNumberMin extends baseChecker.DataParserCheckerBase.init(checkerNumberMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerNumberMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error$1, self, dataParser) {
        const isValid = self.definition.exclusive
            ? value > self.definition.min
            : value >= self.definition.min;
        if (isValid) {
            return value;
        }
        return error.addIssue(error$1, `number ${self.definition.exclusive ? ">" : ">="} ${self.definition.min}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    static create(min, definition = {}) {
        return new DataParserCheckerNumberMin({
            ...definition,
            exclusive: definition.exclusive ?? false,
            min,
        });
    }
}
const checkerNumberMin = detachObjectMethod.detachObjectMethod(DataParserCheckerNumberMin, "create");

exports.DataParserCheckerNumberMin = DataParserCheckerNumberMin;
exports.checkerNumberMin = checkerNumberMin;
exports.checkerNumberMinKind = checkerNumberMinKind;
