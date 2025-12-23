'use strict';

/* eslint-disable @typescript-eslint/max-params */
function asyncInnerPipe(...pipes) {
    return async (input) => {
        let acc = input;
        for (const pipe of pipes) {
            acc = await pipe(acc);
        }
        return acc;
    };
}

exports.asyncInnerPipe = asyncInnerPipe;
