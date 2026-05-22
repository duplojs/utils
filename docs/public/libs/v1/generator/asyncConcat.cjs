'use strict';

function asyncConcat(...args) {
    if (args.length === 1) {
        const [elements] = args;
        return (iterator) => asyncConcat(iterator, elements);
    }
    const [iterator, elements, ...elementsRest] = args;
    return (async function* () {
        for await (const value of iterator) {
            yield value;
        }
        for await (const value of elements) {
            yield value;
        }
        for (const iterable of elementsRest) {
            for await (const value of iterable) {
                yield value;
            }
        }
    })();
}

exports.asyncConcat = asyncConcat;
