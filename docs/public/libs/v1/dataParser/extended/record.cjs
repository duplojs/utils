'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var index = require('../parsers/record/index.cjs');

class DataParserRecordExtended extends base.DataParserBaseExtended.initExtended(index.DataParserRecord) {
    get classConstructor() {
        return this.checkConstructor(DataParserRecordExtended);
    }
    /**
     * {@include dataParser/extended/record/index.md}
     */
    static create(key, value, definition) {
        return new DataParserRecordExtended(this.prepareDefinition(key, value, definition));
    }
}
const record = detachObjectMethod.detachObjectMethod(DataParserRecordExtended, "create");

exports.DataParserRecordExtended = DataParserRecordExtended;
exports.record = record;
