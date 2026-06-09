'use strict';

var baseChecker = require('../../../baseChecker.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerBigIntMaxKind = kind.createDataParserKind("checker-bigint-max");
class DataParserCheckerBigIntMax extends baseChecker.DataParserCheckerBase.init(checkerBigIntMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerBigIntMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error$1, self, dataParser) {
        if (value > self.definition.max) {
            return error.addIssue(error$1, `bigint <= ${self.definition.max}n`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
        }
        return value;
    }
    static create(max, definition = {}) {
        return new DataParserCheckerBigIntMax({
            ...definition,
            max,
        });
    }
}
const checkerBigIntMax = detachObjectMethod.detachObjectMethod(DataParserCheckerBigIntMax, "create");

exports.DataParserCheckerBigIntMax = DataParserCheckerBigIntMax;
exports.checkerBigIntMax = checkerBigIntMax;
exports.checkerBigIntMaxKind = checkerBigIntMaxKind;
