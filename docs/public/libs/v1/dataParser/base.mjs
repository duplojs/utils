import { createKind } from '../common/kind.mjs';
import { simpleClone } from '../common/simpleClone.mjs';
import { createError, SymbolDataParserErrorIssue, addIssue, SymbolDataParserErrorPromiseIssue, addPromiseIssue } from './error.mjs';
import { error } from '../either/left/error.mjs';
import { success } from '../either/right/success.mjs';

const SymbolDataParserErrorLabel = "SymbolDataParserError";
const SymbolDataParserError = Symbol.for(SymbolDataParserErrorLabel);
const dataParserCheckerKind = createKind("data-parser-checker");
function dataParserCheckerInit(kind, params, exec) {
    return kind.setTo(dataParserCheckerKind.setTo({
        ...params,
        exec,
    }));
}
const dataParserKind = createKind("data-parser");
function dataParserInit(kind, params, exec) {
    const formattedExec = typeof exec === "object"
        ? exec
        : {
            sync: exec,
            async: exec,
        };
    function middleExec(data, error) {
        let result = formattedExec.sync(data, error, dataParser);
        if (result === SymbolDataParserErrorIssue) {
            addIssue(error, dataParser, data);
            return SymbolDataParserError;
        }
        else if (result === SymbolDataParserErrorPromiseIssue) {
            addPromiseIssue(error, dataParser, data);
            return SymbolDataParserError;
        }
        else if (result !== SymbolDataParserError
            && dataParser.definition.checkers.length) {
            for (const checker of dataParser.definition.checkers) {
                const checkerResult = checker.exec(result, checker);
                if (checkerResult === SymbolDataParserErrorIssue) {
                    addIssue(error, checker, result);
                    return SymbolDataParserError;
                }
                else {
                    result = checkerResult;
                }
            }
        }
        return result;
    }
    async function middleAsyncExec(data, error) {
        let result = await formattedExec.async(data, error, dataParser);
        if (result === SymbolDataParserErrorIssue) {
            addIssue(error, dataParser, data);
            return SymbolDataParserError;
        }
        else if (result === SymbolDataParserErrorPromiseIssue) {
            addPromiseIssue(error, dataParser, data);
            return SymbolDataParserError;
        }
        else if (result !== SymbolDataParserError
            && dataParser.definition.checkers.length) {
            for (const checker of dataParser.definition.checkers) {
                const checkerResult = checker.exec(result, checker);
                if (checkerResult === SymbolDataParserErrorIssue) {
                    addIssue(error, checker, result);
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
            const error$1 = createError();
            const result = middleExec(data, error$1);
            if (result === SymbolDataParserError) {
                return error(error$1);
            }
            return success(result);
        },
        async asyncParse(data) {
            const error$1 = createError();
            const result = await middleAsyncExec(data, error$1);
            if (result === SymbolDataParserError) {
                return error(error$1);
            }
            return success(result);
        },
        addChecker: (...checkers) => dataParserInit(kind, simpleClone({
            ...params,
            definition: {
                ...params.definition,
                checkers: [...params.definition.checkers, ...checkers],
            },
        }), exec),
        clone: () => dataParserInit(kind, simpleClone(params), exec),
    }, {
        output: undefined,
        input: undefined,
    }));
    return dataParser;
}

export { SymbolDataParserError, SymbolDataParserErrorLabel, dataParserCheckerInit, dataParserCheckerKind, dataParserInit, dataParserKind };
