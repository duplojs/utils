'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var lazy$1 = require('../parsers/lazy.cjs');

class DataParserLazyExtended extends base.DataParserBaseExtended.initExtended(lazy$1.DataParserLazy) {
    get classConstructor() {
        return this.checkConstructor(DataParserLazyExtended);
    }
    /**
     * {@include dataParser/extended/lazy/index.md}
     */
    static create(getter, definition) {
        return new DataParserLazyExtended(this.prepareDefinition(getter, definition));
    }
}
const lazy = detachObjectMethod.detachObjectMethod(DataParserLazyExtended, "create");

exports.DataParserLazyExtended = DataParserLazyExtended;
exports.lazy = lazy;
