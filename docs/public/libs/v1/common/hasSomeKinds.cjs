'use strict';

function hasSomeKinds(...args) {
    if (args.length === 1) {
        const [kinds] = args;
        return (input) => hasSomeKinds(input, kinds);
    }
    const [input, kinds] = args;
    for (const kind of kinds) {
        if (kind.has(input)) {
            return true;
        }
    }
    return false;
}

exports.hasSomeKinds = hasSomeKinds;
