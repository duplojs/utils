'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var date$1 = require('../parsers/date.cjs');

class DataParserDateExtended extends base.DataParserBaseExtended.initExtended(date$1.DataParserDate) {
    get classConstructor() {
        return this.checkConstructor(DataParserDateExtended);
    }
    /**
     * {@include dataParser/extended/date/index.md}
     */
    static create(definition) {
        return new DataParserDateExtended(this.prepareDefinition(definition));
    }
}
const date = detachObjectMethod.detachObjectMethod(DataParserDateExtended, "create");

exports.DataParserDateExtended = DataParserDateExtended;
exports.date = date;
