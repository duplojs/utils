'use strict';

function pipe(input, ...pipes) {
    let acc = input;
    for (const pipe of pipes) {
        acc = pipe(acc);
    }
    return acc;
}

exports.pipe = pipe;
