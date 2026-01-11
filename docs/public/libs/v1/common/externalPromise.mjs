/**
 * {@include common/externalPromise/index.md}
 */
function createExternalPromise() {
    let resolve = undefined;
    let reject = undefined;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return {
        resolve,
        reject,
        promise,
    };
}

export { createExternalPromise };
