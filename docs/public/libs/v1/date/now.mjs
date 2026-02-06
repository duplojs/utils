import { TheDate } from './theDate.mjs';

/**
 * {@include date/now/index.md}
 */
function now() {
    const timestamp = Date.now();
    return TheDate.new(timestamp);
}

export { now };
