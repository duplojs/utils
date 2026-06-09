'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');
var greaterTime = require('../../../../date/operators/greaterTime.cjs');

const checkerTimeMinKind = kind.createDataParserKind("checker-time-min");
class DataParserCheckerTimeMin extends baseChecker.DataParserCheckerBase.init(checkerTimeMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerTimeMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error$1, self, dataParser) {
        return greaterTime.greaterTime(value, self.definition.min)
            ? value
            : error.addIssue(error$1, `time >= ${self.definition.min.toString()}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    /**
     * {@include dataParser/classic/checkerTimeMin/index.md}
     */
    static create(min, definition = {}) {
        return new DataParserCheckerTimeMin({
            ...definition,
            min,
        });
    }
}
const checkerTimeMin = detachObjectMethod.detachObjectMethod(DataParserCheckerTimeMin, "create");

exports.DataParserCheckerTimeMin = DataParserCheckerTimeMin;
exports.checkerTimeMin = checkerTimeMin;
exports.checkerTimeMinKind = checkerTimeMinKind;
