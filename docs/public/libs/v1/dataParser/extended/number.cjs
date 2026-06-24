'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var index = require('../parsers/number/index.cjs');
var min = require('../parsers/number/checkers/min.cjs');
var max = require('../parsers/number/checkers/max.cjs');
var int$1 = require('../parsers/number/checkers/int.cjs');

class DataParserNumberExtended extends base.DataParserBaseExtended.initExtended(index.DataParserNumber) {
    get classConstructor() {
        return this.checkConstructor(DataParserNumberExtended);
    }
    /**
     * {@include dataParser/extended/number/min/index.md}
     */
    min(min$1, definition) {
        return this.addChecker(min.checkerNumberMin(min$1, definition));
    }
    /**
     * {@include dataParser/extended/number/max/index.md}
     */
    max(max$1, definition) {
        return this.addChecker(max.checkerNumberMax(max$1, definition));
    }
    /**
     * {@include dataParser/extended/number/int/index.md}
     */
    int(definition) {
        return this.addChecker(int$1.checkerInt(definition));
    }
    /**
     * {@include dataParser/extended/number/index.md}
     */
    static create(definition) {
        return new DataParserNumberExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/number/index.md}
 */
const number = detachObjectMethod.detachObjectMethod(DataParserNumberExtended, "create");
/**
 * {@include dataParser/extended/int/index.md}
 */
function int(definition) {
    return number({ checkers: [int$1.checkerInt(definition)] });
}

exports.DataParserNumberExtended = DataParserNumberExtended;
exports.int = int;
exports.number = number;
