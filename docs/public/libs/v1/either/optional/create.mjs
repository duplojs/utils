import { optionalEmpty } from './empty.mjs';
import { optionalFilled } from './filled.mjs';

function optional(value) {
    return value === undefined
        ? optionalEmpty()
        : optionalFilled(value);
}

export { optional };
