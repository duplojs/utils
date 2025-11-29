import { millisecondsInOneDay } from './constants.mjs';

function yesterday() {
    const timestamp = Date.now() - millisecondsInOneDay;
    return `date${timestamp}+`;
}

export { yesterday };
