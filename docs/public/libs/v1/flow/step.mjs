import { createStep } from './theFlow/step.mjs';

/**
 * {@include flow/step/index.md}
 */
function step(name, theFunction) {
    const result = theFunction?.();
    if (result instanceof Promise) {
        return (async function* () {
            yield createStep(name);
            const awaitedResult = await result;
            return awaitedResult;
        })();
    }
    return (function* () {
        yield createStep(name);
        return result;
    })();
}

export { step };
