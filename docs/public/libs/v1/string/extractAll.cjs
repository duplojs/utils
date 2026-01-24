'use strict';

var map = require('../generator/map.cjs');

function extractAll(...args) {
    if (args.length === 1) {
        const [pattern] = args;
        return (input) => extractAll(input, pattern);
    }
    const [input, pattern] = args;
    return map.map(input.matchAll(pattern), (value) => ({
        matchedValue: value[0],
        groups: value.slice(1),
        namedGroups: value.groups ? { ...value.groups } : undefined,
        offset: value.index ?? 0,
        self: value.input ?? input,
    }));
}

exports.extractAll = extractAll;
