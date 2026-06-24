'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerBigIntMinKind = kind.createDataParserKind("checker-bigint-min");
class DataParserCheckerBigIntMin extends baseChecker.DataParserCheckerBase.init(checkerBigIntMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerBigIntMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error$1, self, dataParser) {
        if (value < self.definition.min) {
            return error.addIssue(error$1, `bigint >= ${self.definition.min}n`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
        }
        return value;
    }
    static create(min, definition = {}) {
        return new DataParserCheckerBigIntMin({
            ...definition,
            min,
        });
    }
}
const checkerBigIntMin = detachObjectMethod.detachObjectMethod(DataParserCheckerBigIntMin, "create");

exports.DataParserCheckerBigIntMin = DataParserCheckerBigIntMin;
exports.checkerBigIntMin = checkerBigIntMin;
exports.checkerBigIntMinKind = checkerBigIntMinKind;
