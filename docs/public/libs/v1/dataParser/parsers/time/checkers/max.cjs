'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');
var lessTime = require('../../../../date/operators/lessTime.cjs');

const checkerTimeMaxKind = kind.createDataParserKind("checker-time-max");
class DataParserCheckerTimeMax extends baseChecker.DataParserCheckerBase.init(checkerTimeMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerTimeMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error$1, self, dataParser) {
        return lessTime.lessTime(value, self.definition.max)
            ? value
            : error.addIssue(error$1, `time <= ${self.definition.max.toString()}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    /**
     * {@include dataParser/classic/checkerTimeMax/index.md}
     */
    static create(max, definition = {}) {
        return new DataParserCheckerTimeMax({
            ...definition,
            max,
        });
    }
}
/**
 * {@include dataParser/classic/checkerTimeMax/index.md}
 */
const checkerTimeMax = detachObjectMethod.detachObjectMethod(DataParserCheckerTimeMax, "create");

exports.DataParserCheckerTimeMax = DataParserCheckerTimeMax;
exports.checkerTimeMax = checkerTimeMax;
exports.checkerTimeMaxKind = checkerTimeMaxKind;
