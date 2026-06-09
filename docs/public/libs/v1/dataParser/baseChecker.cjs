'use strict';

var kind = require('./kind.cjs');
var kindClass = require('../common/kindClass.cjs');
var bindPrototypeMethods = require('../common/bindPrototypeMethods.cjs');
var simpleClone = require('../common/simpleClone.cjs');

const checkerKind = kind.createDataParserKind("checker");
class DataParserCheckerBase extends kindClass.kindClass(checkerKind) {
    definition;
    constructor(definition) {
        super(null);
        this.definition = definition;
        bindPrototypeMethods.bindPrototypeMethods(this);
    }
    execCheck(data, error, dataParser) {
        const execCheck = this.classConstructor.execCheck;
        const self = this;
        this.execCheck = (data, error, dataParser) => execCheck(data, error, self, dataParser);
        return this.execCheck(data, error, dataParser);
    }
    exec(data, error, dataParser) {
        return this.execCheck(data, error, dataParser);
    }
    clone() {
        return new this.classConstructor(simpleClone.simpleClone(this.definition));
    }
    /**
     * {@include dataParser/classic/baseChecker/setErrorMessage/index.md}
     */
    setErrorMessage(errorMessage) {
        this.definition.errorMessage = errorMessage;
        return this;
    }
    /**
     * {@include dataParser/classic/baseChecker/addErrorMessage/index.md}
     */
    addErrorMessage(errorMessage) {
        const newSchema = this.clone();
        newSchema.setErrorMessage(errorMessage);
        return newSchema;
    }
    static init(kindHandler) {
        class _DataParserCheckerBaseInit extends kindClass.kindClass(kindHandler, DataParserCheckerBase) {
            constructor(definition) {
                super(null, definition);
            }
            checkConstructor(constructor) {
                return constructor;
            }
            static specificKindHandler = kindHandler;
        }
        return _DataParserCheckerBaseInit;
    }
}

exports.DataParserCheckerBase = DataParserCheckerBase;
exports.checkerKind = checkerKind;
