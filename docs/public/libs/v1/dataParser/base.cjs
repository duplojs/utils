'use strict';

var kind = require('./kind.cjs');
var error = require('./error.cjs');
var kindClass = require('../common/kindClass.cjs');
var bindPrototypeMethods = require('../common/bindPrototypeMethods.cjs');
var error$1 = require('../either/left/error.cjs');
var success = require('../either/right/success.cjs');
var simpleClone = require('../common/simpleClone.cjs');
var wrapValue = require('../common/wrapValue.cjs');

const dataParserKind = kind.createDataParserKind("base");
const DPE = error.createError();
const EE = error$1.error(null);
const ES = success.success(null);
const KWV = wrapValue.keyWrappedValue;
class ParseError extends kindClass.kindClass("parse-error", Error) {
    error;
    constructor(error) {
        super({}, "Parse Error.");
        this.error = error;
    }
}
class DataParserBase extends kindClass.kindClass(dataParserKind) {
    definition;
    constructor(definition) {
        super(null);
        this.definition = definition;
        bindPrototypeMethods.bindPrototypeMethods(this);
    }
    execParse(data, error) {
        const execParse = this.classConstructor.execParse;
        const self = this;
        this.execParse = (data, error) => execParse(self, data, error);
        return this.execParse(data, error);
    }
    exec(data, error$1) {
        const result = this.execParse(data, error$1);
        if (result !== error.SymbolDataParserError
            && this.definition.checkers.length) {
            return this.definition.checkers.reduce((accumulator, checker) => {
                if (accumulator === error.SymbolDataParserError) {
                    return accumulator;
                }
                if (accumulator instanceof Promise) {
                    return accumulator.then((awaitedAccumulator) => awaitedAccumulator === error.SymbolDataParserError
                        ? awaitedAccumulator
                        : checker.exec(awaitedAccumulator, error$1, this));
                }
                return checker.exec(accumulator, error$1, this);
            }, result);
        }
        return result;
    }
    /**
     * {@include dataParser/classic/base/parse/index.md}
     */
    parse(data) {
        const error$1 = {
            ...DPE,
            issues: [],
            currentPath: [],
        };
        const result = this.exec(data, error$1);
        if (result instanceof Promise) {
            error.addAsyncIssue(error$1, result);
            return {
                ...EE,
                [KWV]: error$1,
            };
        }
        if (result === error.SymbolDataParserError) {
            return {
                ...EE,
                [KWV]: error$1,
            };
        }
        return {
            ...ES,
            [KWV]: result,
        };
    }
    /**
     * {@include dataParser/classic/base/asyncParse/index.md}
     */
    async asyncParse(data) {
        const error$1 = {
            ...DPE,
            issues: [],
            currentPath: [],
        };
        const result = await this.exec(data, error$1);
        if (result === error.SymbolDataParserError) {
            return {
                ...EE,
                [KWV]: error$1,
            };
        }
        return {
            ...ES,
            [KWV]: result,
        };
    }
    /**
     * {@include dataParser/classic/base/parseOrThrow/index.md}
     */
    parseOrThrow(data) {
        const error$1 = {
            ...DPE,
            issues: [],
            currentPath: [],
        };
        const result = this.exec(data, error$1);
        if (result instanceof Promise) {
            error.addAsyncIssue(error$1, result);
            throw new ParseError(error$1);
        }
        if (result === error.SymbolDataParserError) {
            throw new ParseError(error$1);
        }
        return result;
    }
    /**
     * {@include dataParser/classic/base/asyncParseOrThrow/index.md}
     */
    async asyncParseOrThrow(data) {
        const error$1 = {
            ...DPE,
            issues: [],
            currentPath: [],
        };
        const result = await this.exec(data, error$1);
        if (result === error.SymbolDataParserError) {
            throw new ParseError(error$1);
        }
        return result;
    }
    /**
     * {@include dataParser/classic/base/addChecker/index.md}
     */
    addChecker(...checkers) {
        return new this.classConstructor({
            ...this.definition,
            checkers: [...this.definition.checkers, ...checkers],
        });
    }
    clone() {
        return new this.classConstructor(simpleClone.simpleClone(this.definition));
    }
    cachedIsAsynchronous = undefined;
    /**
     * {@include dataParser/classic/base/isAsynchronous/index.md}
     */
    isAsynchronous() {
        if (this.cachedIsAsynchronous !== undefined) {
            return this.cachedIsAsynchronous;
        }
        this.cachedIsAsynchronous = this.definition.checkers.some((checker) => checker.isAsynchronous());
        if (this.cachedIsAsynchronous) {
            return this.cachedIsAsynchronous;
        }
        this.cachedIsAsynchronous = this.classConstructor.dataParserIsAsynchronous(this);
        return this.cachedIsAsynchronous;
    }
    /**
     * {@include dataParser/classic/base/contract/index.md}
     */
    contract(...args) {
        return this;
    }
    /**
     * {@include dataParser/classic/base/setErrorMessage/index.md}
     */
    setErrorMessage(errorMessage) {
        this.definition.errorMessage = errorMessage;
        return this;
    }
    /**
     * {@include dataParser/classic/base/addErrorMessage/index.md}
     */
    addErrorMessage(errorMessage) {
        const newSchema = this.clone();
        newSchema.setErrorMessage(errorMessage);
        return newSchema;
    }
    static init(kindHandler) {
        class _DataParserBaseInit extends kindClass.kindClass(kindHandler, DataParserBase) {
            constructor(definition) {
                super(null, definition);
            }
            checkConstructor(constructor) {
                return constructor;
            }
            static specificKindHandler = kindHandler;
        }
        return _DataParserBaseInit;
    }
}

exports.DataParserBase = DataParserBase;
exports.ParseError = ParseError;
exports.dataParserKind = dataParserKind;
