'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var unknown$1 = require('../parsers/unknown.cjs');

class DataParserUnknownExtended extends base.DataParserBaseExtended.initExtended(unknown$1.DataParserUnknown) {
    get classConstructor() {
        return this.checkConstructor(DataParserUnknownExtended);
    }
    /**
     * {@include dataParser/extended/unknown/index.md}
     */
    static create(definition) {
        return new DataParserUnknownExtended(this.prepareDefinition(definition));
    }
}
const unknown = detachObjectMethod.detachObjectMethod(DataParserUnknownExtended, "create");

exports.DataParserUnknownExtended = DataParserUnknownExtended;
exports.unknown = unknown;
