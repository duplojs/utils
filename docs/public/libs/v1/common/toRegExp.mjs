import { escapeRegExp } from './escapeRegExp.mjs';
import { is } from '../array/is.mjs';

/**
 * {@include common/toRegExp/index.md}
 */
function toRegExp(input) {
    if (typeof input === "string") {
        return new RegExp(`^${escapeRegExp(input)}$`);
    }
    if (is(input)) {
        const result = input.map(escapeRegExp).join("|");
        return new RegExp(`^(?:${result})$`);
    }
    return input;
}

export { toRegExp };
