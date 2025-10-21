'use strict';

function when(...args) {
    if (args.length === 2) {
        const [ifFunction, theFunction] = args;
        return (input) => when(input, ifFunction, theFunction);
    }
    const [input, ifFunction, theFunction] = args;
    if (ifFunction(input)) {
        return theFunction(input);
    }
    return input;
}

exports.when = when;
