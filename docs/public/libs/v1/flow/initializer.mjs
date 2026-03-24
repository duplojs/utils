import { createDefer } from './theFlow/defer.mjs';
import { createFinalizer } from './theFlow/finalizer.mjs';

/**
 * {@include flow/createInitializer/index.md}
 */
function createInitializer(initializer, params) {
    return (...args) => {
        const result = initializer(...args);
        const defer = params.defer;
        const finalizer = params.finalizer;
        if (result instanceof Promise) {
            return (async function* () {
                const awaitedResult = await result;
                if (defer) {
                    yield createDefer(() => defer(awaitedResult));
                }
                if (finalizer) {
                    yield createFinalizer(() => finalizer(awaitedResult));
                }
                return awaitedResult;
            })();
        }
        return (function* () {
            if (defer) {
                yield createDefer(() => defer(result));
            }
            if (finalizer) {
                yield createFinalizer(() => finalizer(result));
            }
            return result;
        })();
    };
}

export { createInitializer };
