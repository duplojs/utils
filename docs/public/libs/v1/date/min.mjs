import { createOrThrow } from './createOrThrow.mjs';
import { toTimestamp } from './toTimestamp.mjs';

/**
 * {@include date/min/index.md}
 */
function min(input) {
    return createOrThrow(Math.min(...input.map(toTimestamp)));
}

export { min };
