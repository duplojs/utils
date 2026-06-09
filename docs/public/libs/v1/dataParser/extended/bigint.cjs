'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var index = require('../parsers/bigint/index.cjs');
var min = require('../parsers/bigint/checkers/min.cjs');
var max = require('../parsers/bigint/checkers/max.cjs');

class DataParserBigIntExtended extends base.DataParserBaseExtended.initExtended(index.DataParserBigInt) {
    get classConstructor() {
        return this.checkConstructor(DataParserBigIntExtended);
    }
    /**
     * {@include dataParser/extended/bigint/min/index.md}
     */
    min(min$1, definition) {
        return this.addChecker(min.checkerBigIntMin(min$1, definition));
    }
    /**
     * {@include dataParser/extended/bigint/max/index.md}
     */
    max(max$1, definition) {
        return this.addChecker(max.checkerBigIntMax(max$1, definition));
    }
    /**
     * {@include dataParser/extended/bigint/index.md}
     */
    static create(definition) {
        return new DataParserBigIntExtended(this.prepareDefinition(definition));
    }
}
const bigint = detachObjectMethod.detachObjectMethod(DataParserBigIntExtended, "create");

exports.DataParserBigIntExtended = DataParserBigIntExtended;
exports.bigint = bigint;
