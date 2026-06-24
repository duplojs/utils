'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var empty$1 = require('../parsers/empty.cjs');

class DataParserEmptyExtended extends base.DataParserBaseExtended.initExtended(empty$1.DataParserEmpty) {
    get classConstructor() {
        return this.checkConstructor(DataParserEmptyExtended);
    }
    /**
     * {@include dataParser/extended/empty/index.md}
     */
    static create(definition) {
        return new DataParserEmptyExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/empty/index.md}
 */
const empty = detachObjectMethod.detachObjectMethod(DataParserEmptyExtended, "create");

exports.DataParserEmptyExtended = DataParserEmptyExtended;
exports.empty = empty;
