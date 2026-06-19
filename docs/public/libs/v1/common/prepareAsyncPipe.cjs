'use strict';

/** {@include common/prepareAsyncPipe/index.md} */
function prepareAsyncPipe() {
    return (...pipes) => async (input) => {
        let acc = await input;
        for (const pipe of pipes) {
            acc = await pipe(acc);
        }
        return acc;
    };
}

exports.prepareAsyncPipe = prepareAsyncPipe;
