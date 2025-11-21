'use strict';

function replace(...args) {
    if (args.length === 2) {
        const [pattern, replacement] = args;
        return (input) => replace(input, pattern, replacement);
    }
    const [input, pattern, replacement] = args;
    if (typeof replacement === "function") {
        return input.replace(pattern, (matchedValue, ...argsRest) => {
            const namedGroups = typeof argsRest[argsRest.length - 1] === "object"
                ? argsRest.pop()
                : undefined;
            const [offset, self] = argsRest.splice(-2, 2);
            return replacement({
                matchedValue,
                namedGroups,
                offset,
                self,
                groups: argsRest,
            });
        });
    }
    return input.replace(pattern, replacement);
}

exports.replace = replace;
