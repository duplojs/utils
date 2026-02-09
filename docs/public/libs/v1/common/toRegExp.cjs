'use strict';

var escapeRegExp = require('./escapeRegExp.cjs');

/**
 * {@include common/toRegExp/index.md}
 */
function toRegExp(input) {
    if (typeof input === "string") {
        return new RegExp(`^${escapeRegExp.escapeRegExp(input)}$`);
    }
    if (Array.isArray(input)) {
        const result = input.map(escapeRegExp.escapeRegExp).join("|");
        return new RegExp(`^(?:${result})$`);
    }
    return input;
}

exports.toRegExp = toRegExp;
