import { keyWrappedValue } from './wrapValue.mjs';

function unwrap(anyValue) {
    return anyValue && typeof anyValue === "object" && keyWrappedValue in anyValue
        ? anyValue[keyWrappedValue]
        : anyValue;
}

export { unwrap };
