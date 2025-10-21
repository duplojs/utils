'use strict';

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

exports.createExternalPromise = createExternalPromise;
