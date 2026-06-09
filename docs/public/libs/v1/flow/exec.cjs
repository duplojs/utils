'use strict';

var index = require('./theFlow/index.cjs');
var defer = require('./theFlow/defer.cjs');
var finalizer = require('./theFlow/finalizer.cjs');
var run = require('./run.cjs');
var justExec = require('../common/justExec.cjs');
var forward = require('../common/forward.cjs');
var _break = require('./theFlow/break.cjs');
var exit = require('./theFlow/exit.cjs');
var step = require('./theFlow/step.cjs');
var injection = require('./theFlow/injection.cjs');
var dependence = require('./theFlow/dependence.cjs');
var throttling = require('./theFlow/throttling.cjs');
var externalPromise = require('../common/externalPromise.cjs');
var calledByNext = require('./theFlow/calledByNext.cjs');
var queue = require('./theFlow/queue.cjs');
var queue$1 = require('../common/queue.cjs');
var debounce = require('./theFlow/debounce.cjs');

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
    const generator = justExec.justExec(() => {
        if (Symbol.asyncIterator in theFlow || Symbol.iterator in theFlow) {
            return forward.forward(theFlow);
        }
        else if (typeof theFlow === "function") {
            return theFlow(params?.input);
        }
        else {
            return index.theFlowKind.getValue(theFlow).run(params?.input);
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
                    else if (_break.breakKind.has(result.value)) {
                        result = await generator.return(_break.breakKind.getValue(result.value).value);
                        break;
                    }
                    else if (exit.exitKind.has(result.value)) {
                        yield result.value;
                    }
                    else if (defer.deferKind.has(result.value)) {
                        deferFunctions ??= [];
                        deferFunctions.push(defer.deferKind.getValue(result.value));
                    }
                    else if (finalizer.finalizerKind.has(result.value)) {
                        yield result.value;
                    }
                    else if (step.stepKind.has(result.value)) {
                        yield result.value;
                    }
                    else if (injection.injectionKind.has(result.value)) {
                        const injectionProperties = injection.injectionKind.getValue(result.value);
                        const dependenceName = dependence.dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
                        if (!params?.dependencies
                            || !(dependenceName in params.dependencies)) {
                            yield result.value;
                        }
                        else {
                            injectionProperties.inject(params.dependencies[dependenceName]);
                        }
                    }
                    else if (throttling.throttlingKind.has(result.value)) {
                        if (alreadyUseThrottling) {
                            continue;
                        }
                        alreadyUseThrottling = true;
                        const { time, keepLast, returnValue } = throttling.throttlingKind.getValue(result.value);
                        const lastTime = run.throttlingLastTimeWeakStore.get(theFlow);
                        const now = Date.now();
                        run.throttlingLastTimeWeakStore.set(theFlow, now);
                        if (typeof lastTime === "number" && (lastTime + time) > now) {
                            if (keepLast === true) {
                                const resumer = run.throttlingResumerWeakStore.get(theFlow);
                                resumer?.(false);
                                const externalPromise$1 = externalPromise.createExternalPromise();
                                run.throttlingResumerWeakStore.set(theFlow, externalPromise$1.resolve);
                                if (await externalPromise$1.promise) {
                                    continue;
                                }
                            }
                            result = await generator.return(returnValue);
                            break;
                        }
                        else if (keepLast === true) {
                            setTimeout(() => {
                                const resumer = run.throttlingResumerWeakStore.get(theFlow);
                                resumer?.(true);
                            }, time);
                        }
                    }
                    else if (calledByNext.calledByNextKind.has(result.value)) {
                        if (alreadyUseCalledByNext) {
                            continue;
                        }
                        alreadyUseCalledByNext = calledByNext.calledByNextKind.getValue(result.value);
                        const lastFunction = run.calledByNextFunctionWeakStore.get(theFlow);
                        const lastResult = lastFunction?.();
                        if (lastResult instanceof Promise) {
                            await lastResult;
                        }
                        run.calledByNextFunctionWeakStore.set(theFlow, alreadyUseCalledByNext);
                    }
                    else if (queue.queueKind.has(result.value)) {
                        if (alreadyUseQueue) {
                            continue;
                        }
                        const { concurrency, injectResolver } = queue.queueKind.getValue(result.value);
                        let queue$2 = run.queuesWeakStore.get(theFlow);
                        if (queue$2 === undefined) {
                            queue$2 = queue$1.createQueue({ concurrency });
                            run.queuesWeakStore.set(theFlow, queue$2);
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
                        const lastTimeout = run.debounceTimeoutIdWeakStore.get(theFlow);
                        clearTimeout(lastTimeout);
                        const lastResumer = run.debounceResumerWeakStore.get(theFlow);
                        lastResumer?.(false);
                        const externalPromise$1 = externalPromise.createExternalPromise();
                        run.debounceTimeoutIdWeakStore.set(theFlow, setTimeout(() => void externalPromise$1.resolve(true), time));
                        run.debounceResumerWeakStore.set(theFlow, externalPromise$1.resolve);
                        if (await externalPromise$1.promise) {
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
                    && run.calledByNextFunctionWeakStore.get(theFlow) === alreadyUseCalledByNext) {
                    run.calledByNextFunctionWeakStore.delete(theFlow);
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
    return (function* () {
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
                    yield result.value;
                }
                else if (defer.deferKind.has(result.value)) {
                    deferFunctions ??= [];
                    deferFunctions.push(defer.deferKind.getValue(result.value));
                }
                else if (finalizer.finalizerKind.has(result.value)) {
                    yield result.value;
                }
                else if (step.stepKind.has(result.value)) {
                    yield result.value;
                }
                else if (injection.injectionKind.has(result.value)) {
                    const injectionProperties = injection.injectionKind.getValue(result.value);
                    const dependenceName = dependence.dependenceHandlerKind.getValue(injectionProperties.dependenceHandler);
                    if (!params?.dependencies
                        || !(dependenceName in params.dependencies)) {
                        yield result.value;
                    }
                    else {
                        injectionProperties.inject(params.dependencies[dependenceName]);
                    }
                }
                else if (throttling.throttlingKind.has(result.value)) {
                    const { time, returnValue } = throttling.throttlingKind.getValue(result.value);
                    const lastTime = run.throttlingLastTimeWeakStore.get(theFlow);
                    const now = Date.now();
                    run.throttlingLastTimeWeakStore.set(theFlow, now);
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
                deferFunctions.map(justExec.justExec);
            }
        }
    })();
}

exports.exec = exec;
