import { theFlowKind } from './theFlow/index.mjs';
import { deferKind } from './theFlow/defer.mjs';
import { finalizerKind } from './theFlow/finalizer.mjs';
import { createFlowKind } from './kind.mjs';
import { dependenceHandlerKind } from './theFlow/dependence.mjs';
import { breakKind } from './theFlow/break.mjs';
import { exitKind } from './theFlow/exit.mjs';
import { stepKind } from './theFlow/step.mjs';
import { injectionKind } from './theFlow/injection.mjs';
import { justExec } from '../common/justExec.mjs';
import { kindHeritage } from '../common/kind.mjs';

class MissingDependenceError extends kindHeritage("missing-dependence-error", createFlowKind("missing-dependence-error"), Error) {
    dependenceHandler;
    constructor(dependenceHandler) {
        super({}, [`Missing dependence : ${dependenceHandlerKind.getValue(dependenceHandler)}`]);
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

export { MissingDependenceError, run };
