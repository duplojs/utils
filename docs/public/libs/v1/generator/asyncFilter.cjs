'use strict';

function asyncFilter(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (iterator) => asyncFilter(iterator, predicate);
    }
    const [iterator, predicate] = args;
    let index = 0;
    return (async function* () {
        for await (const element of iterator) {
            if (predicate(element, { index })) {
                yield element;
            }
            index++;
        }
    })();
}

exports.asyncFilter = asyncFilter;
