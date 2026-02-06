import { TheDate } from './theDate.mjs';
import { toTimestamp } from './toTimestamp.mjs';

/**
 * {@include date/max/index.md}
 */
function max(input) {
    return TheDate.new(Math.max(...input.map(toTimestamp)));
}

export { max };
