import { escapeRegExp } from './escapeRegExp.mjs';

/**
 * {@include common/toRegExp/index.md}
 */
function toRegExp(input) {
    if (typeof input === "string") {
        return new RegExp(`^${escapeRegExp(input)}$`);
    }
    if (input instanceof Array) {
        const result = input.map(escapeRegExp).join("|");
        return new RegExp(`^(?:${result})$`);
    }
    return input;
}

export { toRegExp };
