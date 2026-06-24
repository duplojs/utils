import { createDataParserKind } from './kind.mjs';
import { SymbolDataParserError, createError, addAsyncIssue } from './error.mjs';
import { kindClass } from '../common/kindClass.mjs';
import { bindPrototypeMethods } from '../common/bindPrototypeMethods.mjs';
import { error } from '../either/left/error.mjs';
import { success } from '../either/right/success.mjs';
import { simpleClone } from '../common/simpleClone.mjs';
import { keyWrappedValue } from '../common/wrapValue.mjs';

const dataParserKind = createDataParserKind("base");
const DPE = createError();
const EE = error(null);
const ES = success(null);
const KWV = keyWrappedValue;
class ParseError extends kindClass("parse-error", Error) {
    error;
    constructor(error) {
        super({}, "Parse Error.");
        this.error = error;
    }
}
class DataParserBase extends kindClass(dataParserKind) {
    definition;
    constructor(definition) {
        super(null);
        this.definition = definition;
        bindPrototypeMethods(this);
    }
    execParse(data, error) {
        const execParse = this.classConstructor.execParse;
        const self = this;
        this.execParse = (data, error) => execParse(self, data, error);
        return this.execParse(data, error);
    }
    exec(data, error) {
        const result = this.execParse(data, error);
        if (result !== SymbolDataParserError
            && this.definition.checkers.length) {
            return this.definition.checkers.reduce((accumulator, checker) => {
                if (accumulator === SymbolDataParserError) {
                    return accumulator;
                }
                if (accumulator instanceof Promise) {
                    return accumulator.then((awaitedAccumulator) => awaitedAccumulator === SymbolDataParserError
                        ? awaitedAccumulator
                        : checker.exec(awaitedAccumulator, error, this));
                }
                return checker.exec(accumulator, error, this);
            }, result);
        }
        return result;
    }
    /**
     * {@include dataParser/classic/base/parse/index.md}
     */
    parse(data) {
        const error = {
            ...DPE,
            issues: [],
            currentPath: [],
        };
        const result = this.exec(data, error);
        if (result instanceof Promise) {
            addAsyncIssue(error, result, this);
            return {
                ...EE,
                [KWV]: error,
            };
        }
        if (result === SymbolDataParserError) {
            return {
                ...EE,
                [KWV]: error,
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
        const error = {
            ...DPE,
            issues: [],
            currentPath: [],
        };
        const result = await this.exec(data, error);
        if (result === SymbolDataParserError) {
            return {
                ...EE,
                [KWV]: error,
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
        const error = {
            ...DPE,
            issues: [],
            currentPath: [],
        };
        const result = this.exec(data, error);
        if (result instanceof Promise) {
            addAsyncIssue(error, result, this);
            throw new ParseError(error);
        }
        if (result === SymbolDataParserError) {
            throw new ParseError(error);
        }
        return result;
    }
    /**
     * {@include dataParser/classic/base/asyncParseOrThrow/index.md}
     */
    async asyncParseOrThrow(data) {
        const error = {
            ...DPE,
            issues: [],
            currentPath: [],
        };
        const result = await this.exec(data, error);
        if (result === SymbolDataParserError) {
            throw new ParseError(error);
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
        return new this.classConstructor(simpleClone(this.definition));
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
        class _DataParserBaseInit extends kindClass(kindHandler, DataParserBase) {
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

export { DataParserBase, ParseError, dataParserKind };
