import { createExternalPromise } from './externalPromise.mjs';
import { forward } from './forward.mjs';

/**
 * {@include common/memoPromise/index.md}
 */
function memoPromise(theFunction) {
    let externalPromise = forward(undefined);
    const payload = {
        get value() {
            if (externalPromise) {
                return externalPromise.promise;
            }
            externalPromise = createExternalPromise();
            const { resolve, reject } = externalPromise;
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
            return externalPromise.promise;
        },
    };
    return payload;
}

export { memoPromise };
