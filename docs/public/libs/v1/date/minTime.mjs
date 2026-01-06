import { createTheTime } from './createTheTime.mjs';
import { toTimestamp } from './toTimestamp.mjs';

function minTime(input) {
    return createTheTime(Math.min(...input.map(toTimestamp)));
}

export { minTime };
