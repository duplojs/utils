'use strict';

var externalPromise = require('./externalPromise.cjs');
var forward = require('./forward.cjs');

/**
 * {@include common/memoPromise/index.md}
 */
function memoPromise(theFunction) {
    let externalPromise$1 = forward.forward(undefined);
    const payload = {
        get value() {
            if (externalPromise$1) {
                return externalPromise$1.promise;
            }
            externalPromise$1 = externalPromise.createExternalPromise();
            const { resolve, reject } = externalPromise$1;
            const promise = theFunction();
            void (promise instanceof Promise
                ? promise
                : Promise.resolve(promise))
                .then((result) => {
                Object.defineProperty(payload, "value", {
                    value: result,
                });
                resolve(result);
            })
                .catch(reject);
            return externalPromise$1.promise;
        },
    };
    return payload;
}

exports.memoPromise = memoPromise;
