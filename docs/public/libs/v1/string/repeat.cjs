'use strict';

function repeat(...args) {
    if (args.length === 1) {
        const [count] = args;
        return (input) => repeat(input, count);
    }
    const [input, count] = args;
    if (count < 0 || !Number.isFinite(count)) {
        return "";
    }
    return input.repeat(count);
}

exports.repeat = repeat;
