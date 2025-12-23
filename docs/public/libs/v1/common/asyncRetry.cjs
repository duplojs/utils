'use strict';

var sleep = require('./sleep.cjs');

async function useAsyncRetry(retryFunction, shouldRetry, options) {
    for (let currentTry = 1; true; currentTry++) {
        const result = await retryFunction();
        if (currentTry >= options.maxRetry
            || !shouldRetry(result)) {
            return result;
        }
        if (options.log) {
            console.log(`useAsyncRetry: attempt ${currentTry} failed, starting new attempt.`);
        }
        if (options.timeToSleep) {
            await sleep.sleep(options.timeToSleep);
        }
    }
}
function createAsyncRetry(retryFunction, checkFunction, options) {
    return ((...args) => useAsyncRetry(() => retryFunction(...args), checkFunction, options));
}

exports.createAsyncRetry = createAsyncRetry;
exports.useAsyncRetry = useAsyncRetry;
