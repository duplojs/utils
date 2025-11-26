import { toTimestamp } from './toTimestamp.mjs';

function toNative(input) {
    const timestamp = toTimestamp(input);
    return new Date(timestamp);
}

export { toNative };
