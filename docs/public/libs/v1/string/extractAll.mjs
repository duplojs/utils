import { map } from '../generator/map.mjs';

function extractAll(...args) {
    if (args.length === 1) {
        const [pattern] = args;
        return (input) => extractAll(input, pattern);
    }
    const [input, pattern] = args;
    return map(input.matchAll(pattern), (value) => ({
        matchedValue: value[0],
        groups: value.slice(1),
        namedGroups: value.groups ? { ...value.groups } : undefined,
        offset: value.index ?? 0,
        self: value.input ?? input,
    }));
}

export { extractAll };
