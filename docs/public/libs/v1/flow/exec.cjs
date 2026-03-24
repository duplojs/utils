'use strict';

var index = require('./theFlow/index.cjs');
var defer = require('./theFlow/defer.cjs');
var finalizer = require('./theFlow/finalizer.cjs');
var justExec = require('../common/justExec.cjs');
var _break = require('./theFlow/break.cjs');
var exit = require('./theFlow/exit.cjs');
var step = require('./theFlow/step.cjs');
var injection = require('./theFlow/injection.cjs');
var dependence = require('./theFlow/dependence.cjs');
var forward = require('../common/forward.cjs');

/**
 * {@include flow/exec/index.md}
 */
function exec(theFlow, ...[params]) {
    let result = undefined;
    let deferFunctions = undefined;
    const generator = justExec.justExec(() => {
        if (Symbol.asyncIterator in theFlow || Symbol.iterator in theFlow) {
            return forward.forward(theFlow);
        }
        else if (typeof theFlow === "function") {
            return theFlow(params?.input);
        }
        else {
            return index.theFLowKind.getValue(theFlow).run(params?.input);
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
                } while (true);
                return result.value;
            }
            finally {
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
