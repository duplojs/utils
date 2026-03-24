import { theFlowKind } from './theFlow/index.mjs';
import { deferKind } from './theFlow/defer.mjs';
import { finalizerKind } from './theFlow/finalizer.mjs';
import { justExec } from '../common/justExec.mjs';
import { breakKind } from './theFlow/break.mjs';
import { exitKind } from './theFlow/exit.mjs';
import { stepKind } from './theFlow/step.mjs';
import { injectionKind } from './theFlow/injection.mjs';
import { dependenceHandlerKind } from './theFlow/dependence.mjs';
import { forward } from '../common/forward.mjs';

/**
 * {@include flow/exec/index.md}
 */
function exec(theFlow, ...[params]) {
    let result = undefined;
    let deferFunctions = undefined;
    const generator = justExec(() => {
        if (Symbol.asyncIterator in theFlow || Symbol.iterator in theFlow) {
            return forward(theFlow);
        }
        else if (typeof theFlow === "function") {
            return theFlow(params?.input);
        }
        else {
            return theFlowKind.getValue(theFlow).run(params?.input);
        }
    });
    if (Symbol.asyncIterator in generator) {
        return (async function* () {
            try {
                do {
                    result = await generator.next();
                    if (result.done === true) {
                        break;
                    }
                    else if (breakKind.has(result.value)) {
                        result = await generator.return(breakKind.getValue(result.value).value);
                        break;
                    }
                    else if (exitKind.has(result.value)) {
                        yield result.value;
                    }
                    else if (deferKind.has(result.value)) {
                        deferFunctions ??= [];
                        deferFunctions.push(deferKind.getValue(result.value));
                    }
                    else if (finalizerKind.has(result.value)) {
                        yield result.value;
                    }
                    else if (stepKind.has(result.value)) {
                        yield result.value;
                    }
                    else if (injectionKind.has(result.value)) {
                        const injectionProperties = injectionKind.getValue(result.value);
                        const dependenceName = dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
                        if (!params?.dependencies
                            || !(dependenceName in params.dependencies)) {
                            yield result.value;
                        }
                        else {
                            injectionProperties.inject(params.dependencies[dependenceName]);
                        }
                    }
                } while (true);
                return result.value;
            }
            finally {
                await generator.return(undefined);
                if (deferFunctions) {
                    await Promise.all(deferFunctions.map(justExec));
                }
            }
        })();
    }
    return (function* () {
        try {
            do {
                result = generator.next();
                if (result.done === true) {
                    break;
                }
                else if (breakKind.has(result.value)) {
                    result = generator.return(breakKind.getValue(result.value).value);
                    break;
                }
                else if (exitKind.has(result.value)) {
                    yield result.value;
                }
                else if (deferKind.has(result.value)) {
                    deferFunctions ??= [];
                    deferFunctions.push(deferKind.getValue(result.value));
                }
                else if (finalizerKind.has(result.value)) {
                    yield result.value;
                }
                else if (stepKind.has(result.value)) {
                    yield result.value;
                }
                else if (injectionKind.has(result.value)) {
                    const injectionProperties = injectionKind.getValue(result.value);
                    const dependenceName = dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
                    if (!params?.dependencies
                        || !(dependenceName in params.dependencies)) {
                        yield result.value;
                    }
                    else {
                        injectionProperties.inject(params.dependencies[dependenceName]);
                    }
                }
            } while (true);
            return result.value;
        }
        finally {
            generator.return(undefined);
            if (deferFunctions) {
                deferFunctions.map(justExec);
            }
        }
    })();
}

export { exec };
