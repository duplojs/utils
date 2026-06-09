'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var coalescing = require('../../array/coalescing.cjs');

const literalKind = kind.createDataParserKind("literal");
class DataParserLiteral extends base.DataParserBase.init(literalKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserLiteral);
    }
    static execParse(self, data, error$1) {
        if (self.definition.value.includes(data)) {
            return data;
        }
        return error.addIssue(error$1, `one of ${self.definition.value.join(", ")}`, data, self.definition.errorMessage);
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(value, definition) {
        return {
            ...definition,
            value: coalescing.coalescing(value),
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/literal/index.md}
     */
    static create(value, definition) {
        return new DataParserLiteral(this.prepareDefinition(value, definition));
    }
}
const literal = detachObjectMethod.detachObjectMethod(DataParserLiteral, "create");

exports.DataParserLiteral = DataParserLiteral;
exports.literal = literal;
exports.literalKind = literalKind;
