import { millisecondsInOneDay } from './constants.mjs';
import { TheDate } from './theDate.mjs';

/**
 * {@include date/tomorrow/index.md}
 */
function tomorrow() {
    const timestamp = Date.now() + millisecondsInOneDay;
    return TheDate.new(timestamp);
}

export { tomorrow };
