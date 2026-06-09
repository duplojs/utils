'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var nil$1 = require('../parsers/nil.cjs');

class DataParserNilExtended extends base.DataParserBaseExtended.initExtended(nil$1.DataParserNil) {
    get classConstructor() {
        return this.checkConstructor(DataParserNilExtended);
    }
    /**
     * {@include dataParser/extended/nil/index.md}
     */
    static create(definition) {
        return new DataParserNilExtended(this.prepareDefinition(definition));
    }
}
const nil = detachObjectMethod.detachObjectMethod(DataParserNilExtended, "create");

exports.DataParserNilExtended = DataParserNilExtended;
exports.nil = nil;
