import { millisecondsInOneDay } from './constants.mjs';

function tomorrow() {
    const timestamp = Date.now() + millisecondsInOneDay;
    return `date${timestamp}+`;
}

export { tomorrow };
