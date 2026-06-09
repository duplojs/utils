'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const unknownKind = kind.createDataParserKind("unknown");
class DataParserUnknown extends base.DataParserBase.init(unknownKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserUnknown);
    }
    static execParse(_self, data, _error) {
        return data;
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(definition) {
        return {
            ...definition,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/unknown/index.md}
     */
    static create(definition) {
        return new DataParserUnknown(this.prepareDefinition(definition));
    }
}
const unknown = detachObjectMethod.detachObjectMethod(DataParserUnknown, "create");

exports.DataParserUnknown = DataParserUnknown;
exports.unknown = unknown;
exports.unknownKind = unknownKind;
