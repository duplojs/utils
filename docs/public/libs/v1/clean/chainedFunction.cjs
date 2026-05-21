'use strict';

var kind = require('./kind.cjs');
var is = require('../either/left/is.cjs');

const requirementsChainedFunctionKind = kind.createCleanKind("requirements-chained-function");
const chainEndKind = kind.createCleanKind("chain-end");
function* breakIfLeft(value) {
    if (is.isLeft(value)) {
        yield value;
    }
    return value;
}
const chainedFunctionParams = { breakIfLeft };
/**
 * {@include clean/chainedFunction/index.md}
 */
function chainedFunction(function1, function2, ...functions) {
    return (theFunction) => {
        const functionChain = [function1, function2, ...functions];
        const createLink = (functionChain) => (theFunction) => {
            const [functionName, chainedFunction] = functionChain.shift();
            const result = theFunction({ [functionName]: chainedFunction });
            const nextLink = functionChain.length === 0
                ? (value) => chainEndKind.setTo({}, value)
                : createLink(functionChain);
            if (result instanceof Promise) {
                return (async function* () {
                    const awaitedResult = await result;
                    if (is.isLeft(awaitedResult)) {
                        yield awaitedResult;
                    }
                    return [awaitedResult, nextLink];
                })();
            }
            return (function* () {
                if (is.isLeft(result)) {
                    yield result;
                }
                return [result, nextLink];
            })();
        };
        const generator = theFunction(createLink(functionChain), chainedFunctionParams);
        let result = undefined;
        if (Symbol.asyncIterator in generator) {
            return (async () => {
                try {
                    result = await generator.next();
                }
                finally {
                    await generator.return(undefined);
                }
                return (chainEndKind.has(result.value)
                    ? chainEndKind.getValue(result.value)
                    : result.value);
            })();
        }
        try {
            result = generator.next();
        }
        finally {
            generator.return(undefined);
        }
        return (chainEndKind.has(result.value)
            ? chainEndKind.getValue(result.value)
            : result.value);
    };
}
chainedFunction.requirements = () => requirementsChainedFunctionKind.setTo({}, []);

exports.chainEndKind = chainEndKind;
exports.chainedFunction = chainedFunction;
exports.requirementsChainedFunctionKind = requirementsChainedFunctionKind;
