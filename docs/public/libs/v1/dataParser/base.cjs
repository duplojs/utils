'use strict';

var error = require('./error.cjs');
var kind = require('./kind.cjs');
var simpleClone = require('../common/simpleClone.cjs');
var wrapValue = require('../common/wrapValue.cjs');
var override = require('../common/override.cjs');
var kind$1 = require('../common/kind.cjs');
var pipe = require('../common/pipe.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');
var error$1 = require('../either/left/error.cjs');
var success = require('../either/right/success.cjs');

const SymbolDataParserErrorLabel = "SymbolDataParserError";
const SymbolDataParserError = Symbol.for(SymbolDataParserErrorLabel);
const checkerKind = kind.createDataParserKind("checker");
function dataParserCheckerInit(kind, params, exec) {
    return kind.setTo(checkerKind.setTo({
        ...params,
        exec,
    }));
}
const dataParserKind = kind.createDataParserKind("base");
// This allows for better performance WTF ???
const SDPEI = error.SymbolDataParserErrorIssue;
const SDPEPI = error.SymbolDataParserErrorPromiseIssue;
const SDPE = SymbolDataParserError;
const DPE = error.createError();
const EE = error$1.error(null);
const ES = success.success(null);
const KWV = wrapValue.keyWrappedValue;
class DataParserThrowError extends kind$1.kindHeritage("dataParserThrowError", errorKindNamespace.createErrorKind("dataParserThrowError"), Error) {
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
        };
    function middleExec(data, error$1) {
        let result = formattedExec.sync(data, error$1, self);
        if (result === SDPEI) {
            error.addIssue(error$1, self, data);
            return SDPE;
        }
        else if (result === SDPEPI) {
            error.addPromiseIssue(error$1, self, data);
            return SDPE;
        }
        else if (result !== SDPE
            && self.definition.checkers.length) {
            for (const checker of self.definition.checkers) {
                const checkerResult = checker.exec(result, checker);
                if (checkerResult === SDPEI) {
                    error.addIssue(error$1, checker, result);
                    return SDPE;
                }
                else {
                    result = checkerResult;
                }
            }
        }
        return result;
    }
    async function middleAsyncExec(data, error$1) {
        let result = await formattedExec.async(data, error$1, self);
        if (result === SDPEI) {
            error.addIssue(error$1, self, data);
            return SDPE;
        }
        else if (result === SDPEPI) {
            error.addPromiseIssue(error$1, self, data);
            return SDPE;
        }
        else if (result !== SDPE
            && self.definition.checkers.length) {
            for (const checker of self.definition.checkers) {
                const checkerResult = checker.exec(result, checker);
                if (checkerResult === SDPEI) {
                    error.addIssue(error$1, checker, result);
                    return SDPE;
                }
                else {
                    result = checkerResult;
                }
            }
        }
        return result;
    }
    const self = pipe.pipe({
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
        addChecker: (...checkers) => dataParserInit(kind, simpleClone.simpleClone({
            ...definition,
            checkers: [...definition.checkers, ...checkers],
        }), exec, specificOverrideHandler),
        clone: () => dataParserInit(kind, simpleClone.simpleClone(definition), exec, specificOverrideHandler),
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
    }, (value) => dataParserKind.setTo(value, null), kind.setTo, (value) => dataParserInit.overrideHandler.apply(value), (value) => specificOverrideHandler.apply(value));
    return self;
}
dataParserInit.overrideHandler = override.createOverride("@duplojs/utils/data-parser/base");

exports.DataParserThrowError = DataParserThrowError;
exports.SymbolDataParserError = SymbolDataParserError;
exports.SymbolDataParserErrorLabel = SymbolDataParserErrorLabel;
exports.checkerKind = checkerKind;
exports.dataParserCheckerInit = dataParserCheckerInit;
exports.dataParserInit = dataParserInit;
exports.dataParserKind = dataParserKind;
