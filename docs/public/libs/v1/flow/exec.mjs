import { theFlowKind } from './theFlow/index.mjs';
import { deferKind } from './theFlow/defer.mjs';
import { finalizerKind } from './theFlow/finalizer.mjs';
import { throttlingLastTimeWeakStore, throttlingResumerWeakStore, calledByNextFunctionWeakStore, queuesWeakStore, debounceTimeoutIdWeakStore, debounceResumerWeakStore } from './run.mjs';
import { justExec } from '../common/justExec.mjs';
import { forward } from '../common/forward.mjs';
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
import { debounceKind } from './theFlow/debounce.mjs';

/**
 * {@include flow/exec/index.md}
 */
function exec(theFlow, ...[params]) {
    let result = undefined;
    let deferFunctions = undefined;
    let alreadyUseThrottling = undefined;
    let alreadyUseDebounce = undefined;
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
                        const lastTime = throttlingLastTimeWeakStore.get(theFlow);
                        const now = Date.now();
                        throttlingLastTimeWeakStore.set(theFlow, now);
                        if (typeof lastTime === "number" && (lastTime + time) > now) {
                            if (keepLast === true) {
                                const resumer = throttlingResumerWeakStore.get(theFlow);
                                resumer?.(false);
                                const externalPromise = createExternalPromise();
                                throttlingResumerWeakStore.set(theFlow, externalPromise.resolve);
                                if (await externalPromise.promise) {
                                    continue;
                                }
                            }
                            result = await generator.return(returnValue);
                            break;
                        }
                        else if (keepLast === true) {
                            setTimeout(() => {
                                const resumer = throttlingResumerWeakStore.get(theFlow);
                                resumer?.(true);
                            }, time);
                        }
                    }
                    else if (calledByNextKind.has(result.value)) {
                        if (alreadyUseCalledByNext) {
                            continue;
                        }
                        alreadyUseCalledByNext = calledByNextKind.getValue(result.value);
                        const lastFunction = calledByNextFunctionWeakStore.get(theFlow);
                        const lastResult = lastFunction?.();
                        if (lastResult instanceof Promise) {
                            await lastResult;
                        }
                        calledByNextFunctionWeakStore.set(theFlow, alreadyUseCalledByNext);
                    }
                    else if (queueKind.has(result.value)) {
                        if (alreadyUseQueue) {
                            continue;
                        }
                        const { concurrency, injectResolver } = queueKind.getValue(result.value);
                        let queue = queuesWeakStore.get(theFlow);
                        if (queue === undefined) {
                            queue = createQueue({ concurrency });
                            queuesWeakStore.set(theFlow, queue);
                        }
                        alreadyUseQueue = await queue.addExternal();
                        injectResolver(alreadyUseQueue);
                    }
                    else if (debounceKind.has(result.value)) {
                        if (alreadyUseDebounce) {
                            continue;
                        }
                        alreadyUseDebounce = true;
                        const { time, returnValue } = debounceKind.getValue(result.value);
                        const lastTimeout = debounceTimeoutIdWeakStore.get(theFlow);
                        clearTimeout(lastTimeout);
                        const lastResumer = debounceResumerWeakStore.get(theFlow);
                        lastResumer?.(false);
                        const externalPromise = createExternalPromise();
                        debounceTimeoutIdWeakStore.set(theFlow, setTimeout(() => void externalPromise.resolve(true), time));
                        debounceResumerWeakStore.set(theFlow, externalPromise.resolve);
                        if (await externalPromise.promise) {
                            continue;
                        }
                        result = await generator.return(returnValue);
                        break;
                    }
                } while (true);
                return result.value;
            }
            finally {
                if (alreadyUseCalledByNext
                    && calledByNextFunctionWeakStore.get(theFlow) === alreadyUseCalledByNext) {
                    calledByNextFunctionWeakStore.delete(theFlow);
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
                    const lastTime = throttlingLastTimeWeakStore.get(theFlow);
                    const now = Date.now();
                    throttlingLastTimeWeakStore.set(theFlow, now);
                    if (typeof lastTime === "number" && (lastTime + time) > now) {
                        result = generator.return(returnValue);
                        break;
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
