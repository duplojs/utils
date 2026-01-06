import { createTheTime } from './createTheTime.mjs';
import { toTimestamp } from './toTimestamp.mjs';

function maxTime(input) {
    return createTheTime(Math.max(...input.map(toTimestamp)));
}

export { maxTime };
