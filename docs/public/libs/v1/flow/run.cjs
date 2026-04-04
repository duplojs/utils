'use strict';

var index = require('./theFlow/index.cjs');
var defer = require('./theFlow/defer.cjs');
var finalizer = require('./theFlow/finalizer.cjs');
var kind$1 = require('./kind.cjs');
var dependence = require('./theFlow/dependence.cjs');
var _break = require('./theFlow/break.cjs');
var exit = require('./theFlow/exit.cjs');
var step = require('./theFlow/step.cjs');
var injection = require('./theFlow/injection.cjs');
var throttling = require('./theFlow/throttling.cjs');
var externalPromise = require('../common/externalPromise.cjs');
var calledByNext = require('./theFlow/calledByNext.cjs');
var queue = require('./theFlow/queue.cjs');
var queue$1 = require('../common/queue.cjs');
var debounce = require('./theFlow/debounce.cjs');
var justExec = require('../common/justExec.cjs');
var kind = require('../common/kind.cjs');

class MissingDependenceError extends kind.kindHeritage("missing-dependence-error", kind$1.createFlowKind("missing-dependence-error"), Error) {
    dependenceHandler;
    constructor(dependenceHandler) {
        super({}, [`Missing dependence : ${dependence.dependenceHandlerKind.getValue(dependenceHandler)}`]);
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
        : index.theFlowKind.getValue(theFlow).run(params?.input);
    if (Symbol.asyncIterator in generator) {
        return (async function () {
            try {
                do {
                    result = await generator.next();
                    if (result.done === true) {
                        break;
                    }
                    else if (_break.breakKind.has(result.value)) {
                        result = await generator.return(_break.breakKind.getValue(result.value).value);
                        break;
                    }
                    else if (exit.exitKind.has(result.value)) {
                        result = await generator.return(exit.exitKind.getValue(result.value).value);
                        break;
                    }
                    else if (defer.deferKind.has(result.value)) {
                        deferFunctions ??= [];
                        deferFunctions.push(defer.deferKind.getValue(result.value));
                    }
                    else if (finalizer.finalizerKind.has(result.value)) {
                        deferFunctions ??= [];
                        deferFunctions.push(finalizer.finalizerKind.getValue(result.value));
                    }
                    else if (params?.includeDetails === true
                        && step.stepKind.has(result.value)) {
                        steps ??= [];
                        steps.push(step.stepKind.getValue(result.value));
                    }
                    else if (injection.injectionKind.has(result.value)) {
                        const injectionProperties = injection.injectionKind.getValue(result.value);
                        const dependenceName = dependence.dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
                        if (!params?.dependencies
                            || !(dependenceName in params.dependencies)) {
                            throw new MissingDependenceError(injectionProperties.dependenceHandler);
                        }
                        injectionProperties.inject(params.dependencies[dependenceName]);
                    }
                    else if (throttling.throttlingKind.has(result.value)) {
                        if (alreadyUseThrottling) {
                            continue;
                        }
                        alreadyUseThrottling = true;
                        const { time, keepLast, returnValue } = throttling.throttlingKind.getValue(result.value);
                        const lastTime = throttlingLastTimeWeakStore.get(theFlow);
                        const now = Date.now();
                        throttlingLastTimeWeakStore.set(theFlow, now);
                        if (typeof lastTime === "number" && (lastTime + time) > now) {
                            if (keepLast === true) {
                                const resumer = throttlingResumerWeakStore.get(theFlow);
                                resumer?.(false);
                                const externalPromise$1 = externalPromise.createExternalPromise();
                                throttlingResumerWeakStore.set(theFlow, externalPromise$1.resolve);
                                if (await externalPromise$1.promise) {
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
                    else if (calledByNext.calledByNextKind.has(result.value)) {
                        if (alreadyUseCalledByNext) {
                            continue;
                        }
                        alreadyUseCalledByNext = calledByNext.calledByNextKind.getValue(result.value);
                        const lastFunction = calledByNextFunctionWeakStore.get(theFlow);
                        const lastResult = lastFunction?.();
                        if (lastResult instanceof Promise) {
                            await lastResult;
                        }
                        calledByNextFunctionWeakStore.set(theFlow, alreadyUseCalledByNext);
                    }
                    else if (queue.queueKind.has(result.value)) {
                        if (alreadyUseQueue) {
                            continue;
                        }
                        const { concurrency, injectResolver } = queue.queueKind.getValue(result.value);
                        let queue$2 = queuesWeakStore.get(theFlow);
                        if (queue$2 === undefined) {
                            queue$2 = queue$1.createQueue({ concurrency });
                            queuesWeakStore.set(theFlow, queue$2);
                        }
                        alreadyUseQueue = await queue$2.addExternal();
                        injectResolver(alreadyUseQueue);
                    }
                    else if (debounce.debounceKind.has(result.value)) {
                        if (alreadyUseDebounce) {
                            continue;
                        }
                        alreadyUseDebounce = true;
                        const { time, returnValue } = debounce.debounceKind.getValue(result.value);
                        const lastTimeout = debounceTimeoutIdWeakStore.get(theFlow);
                        clearTimeout(lastTimeout);
                        const lastResumer = debounceResumerWeakStore.get(theFlow);
                        lastResumer?.(false);
                        const externalPromise$1 = externalPromise.createExternalPromise();
                        debounceTimeoutIdWeakStore.set(theFlow, setTimeout(() => void externalPromise$1.resolve(true), time));
                        debounceResumerWeakStore.set(theFlow, externalPromise$1.resolve);
                        if (await externalPromise$1.promise) {
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
                    await Promise.all(deferFunctions.map(justExec.justExec));
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
            else if (_break.breakKind.has(result.value)) {
                result = generator.return(_break.breakKind.getValue(result.value).value);
                break;
            }
            else if (exit.exitKind.has(result.value)) {
                result = generator.return(exit.exitKind.getValue(result.value).value);
                break;
            }
            else if (defer.deferKind.has(result.value)) {
                deferFunctions ??= [];
                deferFunctions.push(defer.deferKind.getValue(result.value));
            }
            else if (finalizer.finalizerKind.has(result.value)) {
                deferFunctions ??= [];
                deferFunctions.push(finalizer.finalizerKind.getValue(result.value));
            }
            else if (params?.includeDetails === true
                && step.stepKind.has(result.value)) {
                steps ??= [];
                steps.push(step.stepKind.getValue(result.value));
            }
            else if (injection.injectionKind.has(result.value)) {
                const injectionProperties = injection.injectionKind.getValue(result.value);
                const dependenceName = dependence.dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
                if (!params?.dependencies
                    || !(dependenceName in params.dependencies)) {
                    throw new MissingDependenceError(injectionProperties.dependenceHandler);
                }
                injectionProperties.inject(params.dependencies[dependenceName]);
            }
            else if (throttling.throttlingKind.has(result.value)) {
                const { time, returnValue } = throttling.throttlingKind.getValue(result.value);
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
            deferFunctions.map(justExec.justExec);
        }
    }
}

exports.MissingDependenceError = MissingDependenceError;
exports.calledByNextFunctionWeakStore = calledByNextFunctionWeakStore;
exports.debounceResumerWeakStore = debounceResumerWeakStore;
exports.debounceTimeoutIdWeakStore = debounceTimeoutIdWeakStore;
exports.queuesWeakStore = queuesWeakStore;
exports.run = run;
exports.throttlingLastTimeWeakStore = throttlingLastTimeWeakStore;
exports.throttlingResumerWeakStore = throttlingResumerWeakStore;
