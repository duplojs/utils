import { createOrThrow } from './createOrThrow.mjs';
import { toTimestamp } from './toTimestamp.mjs';

function max(input) {
    return createOrThrow(Math.max(...input.map(toTimestamp)));
}

export { max };
