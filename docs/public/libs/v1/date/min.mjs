import { createOrThrow } from './createOrThrow.mjs';
import { toTimestamp } from './toTimestamp.mjs';

function min(input) {
    return createOrThrow(Math.min(...input.map(toTimestamp)));
}

export { min };
