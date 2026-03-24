'use strict';

var step$1 = require('./theFlow/step.cjs');

/**
 * {@include flow/step/index.md}
 */
function step(name, theFunction) {
    const result = theFunction?.();
    if (result instanceof Promise) {
        return (async function* () {
            yield step$1.createStep(name);
            const awaitedResult = await result;
            return awaitedResult;
        })();
    }
    return (function* () {
        yield step$1.createStep(name);
        return result;
    })();
}

exports.step = step;
