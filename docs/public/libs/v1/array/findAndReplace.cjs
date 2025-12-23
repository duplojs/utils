'use strict';

function findAndReplace(...args) {
    if (args.length === 2) {
        const [predicate, value] = args;
        return (input) => findAndReplace(input, predicate, value);
    }
    const [input, predicate, value] = args;
    for (let index = 0; index < input.length; index++) {
        if (predicate(input[index], { index })) {
            const newArray = [...input];
            newArray[index] = value;
            return newArray;
        }
    }
    return undefined;
}

exports.findAndReplace = findAndReplace;
