import { theFlowKind } from './theFlow/index.mjs';
import { deferKind } from './theFlow/defer.mjs';
import { finalizerKind } from './theFlow/finalizer.mjs';
import { createFlowKind } from './kind.mjs';
import { dependenceHandlerKind } from './theFlow/dependence.mjs';
import { breakKind } from './theFlow/break.mjs';
import { exitKind } from './theFlow/exit.mjs';
import { stepKind } from './theFlow/step.mjs';
import { injectionKind } from './theFlow/injection.mjs';
import { throttlingKind } from './theFlow/throttling.mjs';
import { createExternalPromise } from '../common/externalPromise.mjs';
import { calledByNextKind } from './theFlow/calledByNext.mjs';
import { queueKind } from './theFlow/queue.mjs';
import { createQueue } from '../common/queue.mjs';
import { debounceKind } from './theFlow/debounce.mjs';
import { justExec } from '../common/justExec.mjs';
import { kindHeritage } from '../common/kind.mjs';

class MissingDependenceError extends kindHeritage("missing-dependence-error", createFlowKind("missing-dependence-error"), Error) {
    dependenceHandler;
    constructor(dependenceHandler) {
        super({}, [`Missing dependence : ${dependenceHandlerKind.getValue(dependenceHandler)}`]);
        this.dependenceHandler = dependenceHandler;
    }
}
/** @internal */
const throttlingLastTimeWeakStore = new WeakMap();
/** @internal */
const throttlingResumerWeakStore = new WeakMap();
/** @internal */
const debounceTimeoutIdWeakStore = new WeakMap();
/** @internal */
const debounceResumerWeakStore = new WeakMap();
/** @internal */
const calledByNextFunctionWeakStore = new WeakMap();
/** @internal */
const queuesWeakStore = new WeakMap();
/**
 * {@include flow/run/index.md}
 */
function run(theFlow, ...[params]) {
    let result = undefined;
    let deferFunctions = undefined;
    let steps = undefined;
    let alreadyUseThrottling = undefined;
    let alreadyUseDebounce = undefined;
    let alreadyUseCalledByNext = undefined;
    let alreadyUseQueue = undefined;
    const generator = typeof theFlow === "function"
        ? theFlow(params?.input)
        : theFlowKind.getValue(theFlow).run(params?.input);
    if (Symbol.asyncIterator in generator) {
        return (async function () {
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
                        result = await generator.return(exitKind.getValue(result.value).value);
                        break;
                    }
                    else if (deferKind.has(result.value)) {
                        deferFunctions ??= [];
                        deferFunctions.push(deferKind.getValue(result.value));
                    }
                    else if (finalizerKind.has(result.value)) {
                        deferFunctions ??= [];
                        deferFunctions.push(finalizerKind.getValue(result.value));
                    }
                    else if (params?.includeDetails === true
                        && stepKind.has(result.value)) {
                        steps ??= [];
                        steps.push(stepKind.getValue(result.value));
                    }
                    else if (injectionKind.has(result.value)) {
                        const injectionProperties = injectionKind.getValue(result.value);
                        const dependenceName = dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
                        if (!params?.dependencies
                            || !(dependenceName in params.dependencies)) {
                            throw new MissingDependenceError(injectionProperties.dependenceHandler);
                        }
                        injectionProperties.inject(params.dependencies[dependenceName]);
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
                return params?.includeDetails === true
                    ? {
                        result: result.value,
                        steps: steps ?? [],
                    }
                    : result.value;
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
                result = generator.return(exitKind.getValue(result.value).value);
                break;
            }
            else if (deferKind.has(result.value)) {
                deferFunctions ??= [];
                deferFunctions.push(deferKind.getValue(result.value));
            }
            else if (finalizerKind.has(result.value)) {
                deferFunctions ??= [];
                deferFunctions.push(finalizerKind.getValue(result.value));
            }
            else if (params?.includeDetails === true
                && stepKind.has(result.value)) {
                steps ??= [];
                steps.push(stepKind.getValue(result.value));
            }
            else if (injectionKind.has(result.value)) {
                const injectionProperties = injectionKind.getValue(result.value);
                const dependenceName = dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
                if (!params?.dependencies
                    || !(dependenceName in params.dependencies)) {
                    throw new MissingDependenceError(injectionProperties.dependenceHandler);
                }
                injectionProperties.inject(params.dependencies[dependenceName]);
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
        return (params?.includeDetails === true
            ? {
                result: result.value,
                steps: steps ?? [],
            }
            : result.value);
    }
    finally {
        generator.return(undefined);
        if (deferFunctions) {
            deferFunctions.map(justExec);
        }
    }
}

export { MissingDependenceError, calledByNextFunctionWeakStore, debounceResumerWeakStore, debounceTimeoutIdWeakStore, queuesWeakStore, run, throttlingLastTimeWeakStore, throttlingResumerWeakStore };
