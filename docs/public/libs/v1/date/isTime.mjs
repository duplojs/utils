import { TheTime } from './theTime.mjs';

/**
 * {@include date/isTime/index.md}
 */
function isTime(input) {
    if (input instanceof TheTime) {
        return true;
    }
    return false;
}

export { isTime };
