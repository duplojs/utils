'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var index = require('../parsers/time/index.cjs');
var min = require('../parsers/time/checkers/min.cjs');
var max = require('../parsers/time/checkers/max.cjs');

class DataParserTimeExtended extends base.DataParserBaseExtended.initExtended(index.DataParserTime) {
    get classConstructor() {
        return this.checkConstructor(DataParserTimeExtended);
    }
    /**
     * {@include dataParser/extended/time/min/index.md}
     */
    min(min$1, definition) {
        return this.addChecker(min.checkerTimeMin(min$1, definition));
    }
    /**
     * {@include dataParser/extended/time/max/index.md}
     */
    max(max$1, definition) {
        return this.addChecker(max.checkerTimeMax(max$1, definition));
    }
    /**
     * {@include dataParser/extended/time/index.md}
     */
    static create(definition) {
        return new DataParserTimeExtended(this.prepareDefinition(definition));
    }
}
const time = detachObjectMethod.detachObjectMethod(DataParserTimeExtended, "create");

exports.DataParserTimeExtended = DataParserTimeExtended;
exports.time = time;
