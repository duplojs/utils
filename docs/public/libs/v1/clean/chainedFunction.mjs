import { createCleanKind } from './kind.mjs';
import { isLeft } from '../either/left/is.mjs';
import { unwrap } from '../common/unwrap.mjs';

const requirementsChainedFunctionKind = createCleanKind("requirements-chained-function");
const chainEndKind = createCleanKind("chain-end");
function* breakIfLeft(value) {
    if (isLeft(value)) {
        yield value;
    }
    return value;
}
function unwrapResult(resultLink) {
    return [unwrap(resultLink[0]), resultLink[1]];
}
const chainedFunctionParams = {
    breakIfLeft,
    unwrapResult,
};
/**
 * {@include clean/chainedFunction/index.md}
 */
function chainedFunction(function1, function2, ...functions) {
    const functionChain = [function1, function2, ...functions];
    const chainedFunction = (theFunction) => {
        const createLink = (functionChain) => (theFunction) => {
            const [functionName, chainedFunction] = functionChain.shift();
            const result = theFunction({ [functionName]: chainedFunction });
            const nextLink = functionChain.length === 0
                ? (value) => chainEndKind.setTo({}, value)
                : createLink(functionChain);
            if (result instanceof Promise) {
                return (async function* () {
                    const awaitedResult = await result;
                    if (isLeft(awaitedResult)) {
                        yield awaitedResult;
                    }
                    return [awaitedResult, nextLink];
                })();
            }
            return (function* () {
                if (isLeft(result)) {
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
    chainedFunction.functions = Object.fromEntries(functionChain);
    return chainedFunction;
}
chainedFunction.requirements = () => requirementsChainedFunctionKind.setTo({}, []);

export { chainEndKind, chainedFunction, requirementsChainedFunctionKind };
