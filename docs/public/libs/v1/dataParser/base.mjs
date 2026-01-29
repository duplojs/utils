import { createError, addIssue, addPromiseIssue, SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue } from './error.mjs';
import { createDataParserKind } from './kind.mjs';
import { simpleClone } from '../common/simpleClone.mjs';
import { keyWrappedValue } from '../common/wrapValue.mjs';
import { createOverride } from '../common/override.mjs';
import { kindHeritage } from '../common/kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { createErrorKind } from '../common/errorKindNamespace.mjs';
import { error } from '../either/left/error.mjs';
import { success } from '../either/right/success.mjs';

const SymbolDataParserErrorLabel = "SymbolDataParserError";
const SymbolDataParserError = Symbol.for(SymbolDataParserErrorLabel);
const checkerKind = createDataParserKind("checker");
function dataParserCheckerInit(kind, params, exec) {
    return kind.setTo(checkerKind.setTo({
        ...params,
        exec,
    }));
}
const dataParserKind = createDataParserKind("base");
// This allows for better performance WTF ???
const SDPEI = SymbolDataParserErrorIssue;
const SDPEPI = SymbolDataParserErrorPromiseIssue;
const SDPE = SymbolDataParserError;
const DPE = createError();
const EE = error(null);
const ES = success(null);
const KWV = keyWrappedValue;
class DataParserThrowError extends kindHeritage("dataParserThrowError", createErrorKind("dataParserThrowError"), Error) {
    value;
    constructor(value) {
        super({}, ["Parse Error."]);
        this.value = value;
    }
}
function dataParserInit(kind, definition, exec, specificOverrideHandler) {
    const formattedExec = typeof exec === "object"
        ? exec
        : {
            sync: exec,
            async: exec,
            isAsynchronous: () => false,
        };
    function middleExec(data, error) {
        let result = formattedExec.sync(data, error, self);
        if (result === SDPEI) {
            addIssue(error, self, data);
            return SDPE;
        }
        else if (result === SDPEPI) {
            addPromiseIssue(error, self, data);
            return SDPE;
        }
        else if (result !== SDPE
            && self.definition.checkers.length) {
            for (const checker of self.definition.checkers) {
                const checkerResult = checker.exec(result, checker);
                if (checkerResult === SDPEI) {
                    addIssue(error, checker, result);
                    return SDPE;
                }
                else {
                    result = checkerResult;
                }
            }
        }
        return result;
    }
    async function middleAsyncExec(data, error) {
        let result = await formattedExec.async(data, error, self);
        if (result === SDPEI) {
            addIssue(error, self, data);
            return SDPE;
        }
        else if (result === SDPEPI) {
            addPromiseIssue(error, self, data);
            return SDPE;
        }
        else if (result !== SDPE
            && self.definition.checkers.length) {
            for (const checker of self.definition.checkers) {
                const checkerResult = checker.exec(result, checker);
                if (checkerResult === SDPEI) {
                    addIssue(error, checker, result);
                    return SDPE;
                }
                else {
                    result = checkerResult;
                }
            }
        }
        return result;
    }
    const self = pipe({
        definition,
        exec: middleExec,
        asyncExec: middleAsyncExec,
        parse(data) {
            const error = {
                ...DPE,
                issues: [],
                currentPath: [],
            };
            const result = middleExec(data, error);
            if (result === SDPE) {
                return {
                    ...EE,
                    [KWV]: error,
                };
            }
            return {
                ...ES,
                [KWV]: result,
            };
        },
        async asyncParse(data) {
            const error = {
                ...DPE,
                issues: [],
                currentPath: [],
            };
            const result = await middleAsyncExec(data, error);
            if (result === SDPE) {
                return {
                    ...EE,
                    [KWV]: error,
                };
            }
            return {
                ...ES,
                [KWV]: result,
            };
        },
        addChecker: (...checkers) => dataParserInit(kind, simpleClone({
            ...definition,
            checkers: [...definition.checkers, ...checkers],
        }), exec, specificOverrideHandler),
        clone: () => dataParserInit(kind, simpleClone(definition), exec, specificOverrideHandler),
        contract: () => self,
        parseOrThrow(data) {
            const error = {
                ...DPE,
                issues: [],
                currentPath: [],
            };
            const result = middleExec(data, error);
            if (result === SDPE) {
                throw new DataParserThrowError(error);
            }
            return result;
        },
        async asyncParseOrThrow(data) {
            const error = {
                ...DPE,
                issues: [],
                currentPath: [],
            };
            const result = await middleAsyncExec(data, error);
            if (result === SDPE) {
                throw new DataParserThrowError(error);
            }
            return result;
        },
        isAsynchronous() {
            return formattedExec.isAsynchronous(self);
        },
    }, (value) => dataParserKind.setTo(value, null), kind.setTo, (value) => dataParserInit.overrideHandler.apply(value), (value) => specificOverrideHandler.apply(value));
    return self;
}
dataParserInit.overrideHandler = createOverride("@duplojs/utils/data-parser/base");

export { DataParserThrowError, SymbolDataParserError, SymbolDataParserErrorLabel, checkerKind, dataParserCheckerInit, dataParserInit, dataParserKind };
