'use strict';

/** {@include common/preparePipe/index.md} */
function preparePipe() {
    return (...pipes) => (input) => {
        let acc = input;
        for (const pipe of pipes) {
            acc = pipe(acc);
        }
        return acc;
    };
}

exports.preparePipe = preparePipe;
