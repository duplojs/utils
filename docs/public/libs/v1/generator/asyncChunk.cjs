'use strict';

function asyncChunk(...args) {
    if (args.length === 1) {
        const [size] = args;
        return (input) => asyncChunk(input, size);
    }
    const [input, size] = args;
    return (async function* () {
        let buffer = [];
        for await (const element of input) {
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

exports.asyncChunk = asyncChunk;
