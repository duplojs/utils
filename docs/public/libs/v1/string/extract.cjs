'use strict';

function extract(...args) {
    if (args.length === 1) {
        const [pattern] = args;
        return (input) => extract(input, pattern);
    }
    const [input, pattern] = args;
    const result = input.match(pattern);
    if (!result) {
        return undefined;
    }
    return {
        matchedValue: result[0],
        groups: result.slice(1),
        namedGroups: result.groups ? { ...result.groups } : undefined,
        offset: result.index ?? 0,
        self: result.input ?? input,
    };
}

exports.extract = extract;
