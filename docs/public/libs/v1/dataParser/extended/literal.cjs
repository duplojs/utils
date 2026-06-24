'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var literal$1 = require('../parsers/literal.cjs');

class DataParserLiteralExtended extends base.DataParserBaseExtended.initExtended(literal$1.DataParserLiteral) {
    get classConstructor() {
        return this.checkConstructor(DataParserLiteralExtended);
    }
    /**
     * {@include dataParser/extended/literal/index.md}
     */
    static create(value, definition) {
        return new DataParserLiteralExtended(this.prepareDefinition(value, definition));
    }
}
/**
 * {@include dataParser/extended/literal/index.md}
 */
const literal = detachObjectMethod.detachObjectMethod(DataParserLiteralExtended, "create");

exports.DataParserLiteralExtended = DataParserLiteralExtended;
exports.literal = literal;
