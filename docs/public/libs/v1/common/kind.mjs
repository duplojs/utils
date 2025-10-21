import { keyWrappedValue } from './wrapValue.mjs';

const keyKindPrefix = `${keyWrappedValue}/kind/`;
function createKind(name) {
    const runTimeKey = `${keyKindPrefix}${name}`;
    return {
        definition: undefined,
        runTimeKey,
        addTo(input, value = null) {
            return {
                ...input,
                [runTimeKey]: value,
            };
        },
        has(input) {
            return input
                && typeof input === "object"
                && runTimeKey in input;
        },
        getValue(input) {
            return input[runTimeKey];
        },
    };
}

export { createKind, keyKindPrefix };
