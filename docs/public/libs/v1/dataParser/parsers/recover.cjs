'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var callThen = require('../../common/callThen.cjs');

const recoverKind = kind.createDataParserKind("recover");
class DataParserRecover extends base.DataParserBase.init(recoverKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserRecover);
    }
    static execParse(self, data, error$1) {
        return callThen.callThen(self.definition.inner.exec(data, error$1), (result) => result === error.SymbolDataParserError
            ? self.definition.recoveredValue
            : result);
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.inner.isAsynchronous();
    }
    static prepareDefinition(inner, recoveredValue, definition) {
        return {
            ...definition,
            inner,
            recoveredValue,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/recover/index.md}
     */
    static create(inner, recoveredValue, definition) {
        return new DataParserRecover(this.prepareDefinition(inner, recoveredValue, definition));
    }
}
const recover = detachObjectMethod.detachObjectMethod(DataParserRecover, "create");

exports.DataParserRecover = DataParserRecover;
exports.recover = recover;
exports.recoverKind = recoverKind;
