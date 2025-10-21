'use strict';

async function asyncPipe(input, ...pipes) {
    let acc = await input;
    for (const pipe of pipes) {
        acc = await pipe(acc);
    }
    return acc;
}

exports.asyncPipe = asyncPipe;
