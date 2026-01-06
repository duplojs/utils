import { millisecondsInOneDay } from './constants.mjs';

/**
 * {@include date/yesterday/index.md}
 */
function yesterday() {
    const timestamp = Date.now() - millisecondsInOneDay;
    return `date${timestamp}+`;
}

export { yesterday };
