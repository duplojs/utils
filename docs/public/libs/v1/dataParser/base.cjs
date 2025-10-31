'use strict';

var simpleClone = require('../common/simpleClone.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
var error = require('./error.cjs');
var error$1 = require('../either/left/error.cjs');
var success = require('../either/right/success.cjs');
var kind = require('./kind.cjs');

const SymbolDataParserErrorLabel = "SymbolDataParserError";
const SymbolDataParserError = Symbol.for(SymbolDataParserErrorLabel);
const dataParserCheckerKind = kind.createDataParserKind("checker");
function dataParserCheckerInit(kind, params, exec) {
    return kind.setTo(dataParserCheckerKind.setTo({
        ...params,
        exec,
    }));
}
const dataParserKind = kind.createDataParserKind("base");
function dataParserInit(kind, params, exec) {
    const formattedExec = typeof exec === "object"
        ? exec
        : {
            sync: exec,
            async: exec,
        };
    function middleExec(data, error$1) {
        let result = formattedExec.sync(data, error$1, dataParser);
        if (result === error.SymbolDataParserErrorIssue) {
            error.addIssue(error$1, dataParser, data);
            return SymbolDataParserError;
        }
        else if (result === error.SymbolDataParserErrorPromiseIssue) {
            error.addPromiseIssue(error$1, dataParser, data);
            return SymbolDataParserError;
        }
        else if (result !== SymbolDataParserError
            && dataParser.definition.checkers.length) {
            for (const checker of dataParser.definition.checkers) {
                const checkerResult = checker.exec(result, checker);
                if (checkerResult === error.SymbolDataParserErrorIssue) {
                    error.addIssue(error$1, checker, result);
                    return SymbolDataParserError;
                }
                else {
                    result = checkerResult;
                }
            }
        }
        return result;
    }
    async function middleAsyncExec(data, error$1) {
        let result = await formattedExec.async(data, error$1, dataParser);
        if (result === error.SymbolDataParserErrorIssue) {
            error.addIssue(error$1, dataParser, data);
            return SymbolDataParserError;
        }
        else if (result === error.SymbolDataParserErrorPromiseIssue) {
            error.addPromiseIssue(error$1, dataParser, data);
            return SymbolDataParserError;
        }
        else if (result !== SymbolDataParserError
            && dataParser.definition.checkers.length) {
            for (const checker of dataParser.definition.checkers) {
                const checkerResult = checker.exec(result, checker);
                if (checkerResult === error.SymbolDataParserErrorIssue) {
                    error.addIssue(error$1, checker, result);
                    return SymbolDataParserError;
                }
                else {
                    result = checkerResult;
                }
            }
        }
        return result;
    }
    const dataParser = kind.setTo(dataParserKind.setTo({
        ...params,
        exec: middleExec,
        asyncExec: middleAsyncExec,
        parse(data) {
            const error$2 = error.createError();
            const result = middleExec(data, error$2);
            if (result === SymbolDataParserError) {
                return error$1.error(error$2);
            }
            return success.success(result);
        },
        async asyncParse(data) {
            const error$2 = error.createError();
            const result = await middleAsyncExec(data, error$2);
            if (result === SymbolDataParserError) {
                return error$1.error(error$2);
            }
            return success.success(result);
        },
        addChecker: (...checkers) => dataParserInit(kind, simpleClone.simpleClone({
            ...params,
            definition: {
                ...params.definition,
                checkers: [...params.definition.checkers, ...checkers],
            },
        }), exec),
        clone: () => dataParserInit(kind, simpleClone.simpleClone(params), exec),
    }, {
        output: undefined,
        input: undefined,
    }));
    return dataParser;
}

exports.SymbolDataParserError = SymbolDataParserError;
exports.SymbolDataParserErrorLabel = SymbolDataParserErrorLabel;
exports.dataParserCheckerInit = dataParserCheckerInit;
exports.dataParserCheckerKind = dataParserCheckerKind;
exports.dataParserInit = dataParserInit;
exports.dataParserKind = dataParserKind;
