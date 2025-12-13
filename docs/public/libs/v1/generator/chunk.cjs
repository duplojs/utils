'use strict';

function chunk(...args) {
    if (args.length === 1) {
        const [size] = args;
        return (input) => chunk(input, size);
    }
    const [input, size] = args;
    return (function* () {
        let buffer = [];
        for (const element of input) {
            buffer.push(element);
            if (buffer.length === size) {
                yield buffer;
                buffer = [];
            }
        }
        if (buffer.length > 0) {
            yield buffer;
        }
    })();
}

exports.chunk = chunk;
