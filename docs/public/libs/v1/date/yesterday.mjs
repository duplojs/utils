import { millisecondsInOneDay } from './constants.mjs';
import { TheDate } from './theDate.mjs';

/**
 * {@include date/yesterday/index.md}
 */
function yesterday() {
    const timestamp = Date.now() - millisecondsInOneDay;
    return TheDate.new(timestamp);
}

export { yesterday };
