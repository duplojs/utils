import { pipe } from '../common/pipe.mjs';
import { simpleClone } from '../common/simpleClone.mjs';
import '../common/stringToBytes.mjs';
import '../common/stringToMillisecond.mjs';
import { keyWrappedValue } from '../common/wrapValue.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import '../either/bool/falsy.mjs';
import '../either/bool/truthy.mjs';
import '../either/bool/base.mjs';
import '../either/left/create.mjs';
import { error } from '../either/left/error.mjs';
import '../either/left/fail.mjs';
import '../either/kind.mjs';
import { success } from '../either/right/success.mjs';
import '../either/right/create.mjs';
import '../either/right/ok.mjs';
import '../either/future/success.mjs';
import '../either/future/error.mjs';
import '../either/future/base.mjs';
import '../either/nullable/empty.mjs';
import '../either/nullable/filled.mjs';
import '../either/nullable/base.mjs';
import '../either/nullish/empty.mjs';
import '../either/nullish/filled.mjs';
import '../either/nullish/base.mjs';
import '../either/optional/empty.mjs';
import '../either/optional/filled.mjs';
import '../either/optional/base.mjs';
import { createOverride } from '../common/override.mjs';
import { createError, addIssue, addPromiseIssue, SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue } from './error.mjs';
import { createDataParserKind } from './kind.mjs';

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
function dataParserInit(kind, params, exec) {
    const formattedExec = typeof exec === "object"
        ? exec
        : {
            sync: exec,
            async: exec,
        };
    function middleExec(data, error) {
        let result = formattedExec.sync(data, error, dataParser);
        if (result === SDPEI) {
            addIssue(error, dataParser, data);
            return SDPE;
        }
        else if (result === SDPEPI) {
            addPromiseIssue(error, dataParser, data);
            return SDPE;
        }
        else if (result !== SDPE
            && dataParser.definition.checkers.length) {
            for (const checker of dataParser.definition.checkers) {
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
        let result = await formattedExec.async(data, error, dataParser);
        if (result === SDPEI) {
            addIssue(error, dataParser, data);
            return SDPE;
        }
        else if (result === SDPEPI) {
            addPromiseIssue(error, dataParser, data);
            return SDPE;
        }
        else if (result !== SDPE
            && dataParser.definition.checkers.length) {
            for (const checker of dataParser.definition.checkers) {
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
    const dataParser = pipe({
        ...params,
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
            ...params,
            definition: {
                ...params.definition,
                checkers: [...params.definition.checkers, ...checkers],
            },
        }), exec),
        clone: () => dataParserInit(kind, simpleClone(params), exec),
    }, (value) => dataParserKind.setTo(value, null), kind.setTo, dataParserInit.overrideHandler.apply);
    return dataParser;
}
dataParserInit.overrideHandler = createOverride("@duplojs/utils/data-parser/base");

export { SymbolDataParserError, SymbolDataParserErrorLabel, checkerKind, dataParserCheckerInit, dataParserInit, dataParserKind };
