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
var justExec = require('../common/justExec.cjs');
var kind = require('../common/kind.cjs');

class MissingDependenceError extends kind.kindHeritage("missing-dependence-error", kind$1.createFlowKind("missing-dependence-error"), Error) {
    dependenceHandler;
    constructor(dependenceHandler) {
        super({}, [`Missing dependence : ${dependence.dependenceHandlerKind.getValue(dependenceHandler)}`]);
        this.dependenceHandler = dependenceHandler;
    }
}
/**
 * {@include flow/run/index.md}
 */
function run(theFlow, ...[params]) {
    let result = undefined;
    let deferFunctions = undefined;
    let steps = undefined;
    const generator = typeof theFlow === "function"
        ? theFlow(params?.input)
        : index.theFLowKind.getValue(theFlow).run(params?.input);
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
                } while (true);
                return params?.includeDetails === true
                    ? {
                        result: result.value,
                        steps: steps ?? [],
                    }
                    : result.value;
            }
            finally {
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
exports.run = run;
