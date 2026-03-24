'use strict';

var defer = require('./theFlow/defer.cjs');
var finalizer = require('./theFlow/finalizer.cjs');

/**
 * {@include flow/createInitializer/index.md}
 */
function createInitializer(initializer, params) {
    return (...args) => {
        const result = initializer(...args);
        const defer$1 = params.defer;
        const finalizer$1 = params.finalizer;
        if (result instanceof Promise) {
            return (async function* () {
                const awaitedResult = await result;
                if (defer$1) {
                    yield defer.createDefer(() => defer$1(awaitedResult));
                }
                if (finalizer$1) {
                    yield finalizer.createFinalizer(() => finalizer$1(awaitedResult));
                }
                return awaitedResult;
            })();
        }
        return (function* () {
            if (defer$1) {
                yield defer.createDefer(() => defer$1(result));
            }
            if (finalizer$1) {
                yield finalizer.createFinalizer(() => finalizer$1(result));
            }
            return result;
        })();
    };
}

exports.createInitializer = createInitializer;
