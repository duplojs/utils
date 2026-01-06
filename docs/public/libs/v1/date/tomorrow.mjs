import { millisecondsInOneDay } from './constants.mjs';

/**
 * {@include date/tomorrow/index.md}
 */
function tomorrow() {
    const timestamp = Date.now() + millisecondsInOneDay;
    return `date${timestamp}+`;
}

export { tomorrow };
