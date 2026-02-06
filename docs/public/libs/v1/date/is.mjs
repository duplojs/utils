import { TheDate } from './theDate.mjs';

/**
 * {@include date/is/index.md}
 */
function is(input) {
    if (input instanceof TheDate) {
        return true;
    }
    return false;
}

export { is };
