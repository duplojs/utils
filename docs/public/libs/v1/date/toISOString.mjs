import { toNative } from './toNative.mjs';

function toISOString(input) {
    const date = toNative(input);
    return date.toISOString();
}

export { toISOString };
