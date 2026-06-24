'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var boolean$1 = require('../parsers/boolean.cjs');

class DataParserBooleanExtended extends base.DataParserBaseExtended.initExtended(boolean$1.DataParserBoolean) {
    get classConstructor() {
        return this.checkConstructor(DataParserBooleanExtended);
    }
    /**
     * {@include dataParser/extended/boolean/index.md}
     */
    static create(definition) {
        return new DataParserBooleanExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/boolean/index.md}
 */
const boolean = detachObjectMethod.detachObjectMethod(DataParserBooleanExtended, "create");

exports.DataParserBooleanExtended = DataParserBooleanExtended;
exports.boolean = boolean;
