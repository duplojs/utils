'use strict';

function substring(...args) {
    if (typeof args[0] === "number") {
        const [start, end] = args;
        return (input) => substring(input, start, end);
    }
    const [input, start, end] = args;
    return input.substring(start, end);
}

exports.substring = substring;
