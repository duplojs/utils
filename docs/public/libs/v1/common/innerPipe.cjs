'use strict';

function innerPipe(...pipes) {
    return (input) => {
        let acc = input;
        for (const pipe of pipes) {
            acc = pipe(acc);
        }
        return acc;
    };
}

exports.innerPipe = innerPipe;
