'use strict';

function hasKinds(...args) {
    if (args.length === 1) {
        const [kinds] = args;
        return (input) => hasKinds(input, kinds);
    }
    const [input, kinds] = args;
    for (const kind of kinds) {
        if (!kind.has(input)) {
            return false;
        }
    }
    return true;
}

exports.hasKinds = hasKinds;
