import { theFlowKind } from './theFlow/index.mjs';
import { deferKind } from './theFlow/defer.mjs';
import { finalizerKind } from './theFlow/finalizer.mjs';
import { justExec } from '../common/justExec.mjs';
import { breakKind } from './theFlow/break.mjs';
import { exitKind } from './theFlow/exit.mjs';
import { stepKind } from './theFlow/step.mjs';
import { injectionKind } from './theFlow/injection.mjs';
import { dependenceHandlerKind } from './theFlow/dependence.mjs';
import { throttlingKind } from './theFlow/throttling.mjs';
import { createExternalPromise } from '../common/externalPromise.mjs';
import { calledByNextKind } from './theFlow/calledByNext.mjs';
import { queueKind } from './theFlow/queue.mjs';
import { createQueue } from '../common/queue.mjs';
import { forward } from '../common/forward.mjs';

const throttlingLastTime = new WeakMap();
const throttlingResumer = new WeakMap();
const calledByNextFunction = new WeakMap();
const queues = new WeakMap();
/**
 * {@include flow/exec/index.md}
 */
function exec(theFlow, ...[params]) {
    let result = undefined;
    let deferFunctions = undefined;
    let alreadyUseThrottling = undefined;
    let alreadyUseCalledByNext = undefined;
    let alreadyUseQueue = undefined;
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
                    else if (throttlingKind.has(result.value)) {
                        if (alreadyUseThrottling) {
                            continue;
                        }
                        alreadyUseThrottling = true;
                        const { time, keepLast, returnValue } = throttlingKind.getValue(result.value);
                        const lastTime = throttlingLastTime.get(theFlow);
                        const now = Date.now();
                        throttlingLastTime.set(theFlow, now);
                        if (typeof lastTime === "number" && (lastTime + time) > now) {
                            if (keepLast === true) {
                                const resumer = throttlingResumer.get(theFlow);
                                resumer?.(false);
                                const externalPromise = createExternalPromise();
                                throttlingResumer.set(theFlow, externalPromise.resolve);
                                if (await externalPromise.promise) {
                                    continue;
                                }
                            }
                            result = await generator.return(returnValue);
                            break;
                        }
                        else if (keepLast === true) {
                            setTimeout(() => {
                                const resumer = throttlingResumer.get(theFlow);
                                resumer?.(true);
                            }, time);
                        }
                    }
                    else if (calledByNextKind.has(result.value)) {
                        if (alreadyUseCalledByNext) {
                            continue;
                        }
                        alreadyUseCalledByNext = calledByNextKind.getValue(result.value);
                        const lastFunction = calledByNextFunction.get(theFlow);
                        lastFunction?.();
                        calledByNextFunction.set(theFlow, alreadyUseCalledByNext);
                    }
                    else if (queueKind.has(result.value)) {
                        if (alreadyUseQueue) {
                            continue;
                        }
                        const { concurrency, injectResolver } = queueKind.getValue(result.value);
                        let queue = queues.get(theFlow);
                        if (queue === undefined) {
                            queue = createQueue({ concurrency });
                            queues.set(theFlow, queue);
                        }
                        alreadyUseQueue = await queue.addExternal();
                        injectResolver(alreadyUseQueue);
                    }
                } while (true);
                return result.value;
            }
            finally {
                if (alreadyUseCalledByNext
                    && calledByNextFunction.get(theFlow) === alreadyUseCalledByNext) {
                    calledByNextFunction.delete(theFlow);
                }
                if (alreadyUseQueue) {
                    alreadyUseQueue();
                }
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
                else if (throttlingKind.has(result.value)) {
                    const { time, returnValue } = throttlingKind.getValue(result.value);
                    const lastTime = throttlingLastTime.get(theFlow);
                    const now = Date.now();
                    throttlingLastTime.set(theFlow, now);
                    if (typeof lastTime === "number" && (lastTime + time) > now) {
                        result = generator.return(returnValue);
                        break;
                    }
                }
            } while (true);
            return result.value;
        }
        finally {
            if (alreadyUseCalledByNext
                && calledByNextFunction.get(theFlow) === alreadyUseCalledByNext) {
                calledByNextFunction.delete(theFlow);
            }
            generator.return(undefined);
            if (deferFunctions) {
                deferFunctions.map(justExec);
            }
        }
    })();
}

export { exec };
