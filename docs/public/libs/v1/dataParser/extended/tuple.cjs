'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var tuple$1 = require('../parsers/tuple.cjs');
var min = require('../parsers/array/checkers/min.cjs');
var max = require('../parsers/array/checkers/max.cjs');

class DataParserTupleExtended extends base.DataParserBaseExtended.initExtended(tuple$1.DataParserTuple) {
    get classConstructor() {
        return this.checkConstructor(DataParserTupleExtended);
    }
    /**
     * {@include dataParser/extended/tuple/min/index.md}
     */
    min(min$1, definition) {
        return this.addChecker(min.checkerArrayMin(min$1, definition));
    }
    /**
     * {@include dataParser/extended/tuple/max/index.md}
     */
    max(max$1, definition) {
        return this.addChecker(max.checkerArrayMax(max$1, definition));
    }
    /**
     * {@include dataParser/extended/tuple/rest/index.md}
     */
    rest(dataParser) {
        return tuple(this.definition.shape, {
            ...this.definition,
            rest: dataParser,
        });
    }
    /**
     * {@include dataParser/extended/tuple/index.md}
     */
    static create(shape, definition) {
        return new DataParserTupleExtended(this.prepareDefinition(shape, definition));
    }
}
/**
 * {@include dataParser/extended/tuple/index.md}
 */
const tuple = detachObjectMethod.detachObjectMethod(DataParserTupleExtended, "create");

exports.DataParserTupleExtended = DataParserTupleExtended;
exports.tuple = tuple;
