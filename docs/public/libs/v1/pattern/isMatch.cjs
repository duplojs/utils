'use strict';

var pattern = require('./types/pattern.cjs');

const SymbolToolPatternFunction = Symbol.for(pattern.SymbolToolPatternFunctionLabel);
function isMatch(...args) {
    if (args.length === 1) {
        const [pattern] = args;
        return (input) => isMatch(input, pattern);
    }
    const [input, pattern] = args;
    if (typeof pattern === "string"
        || typeof pattern === "number"
        || typeof pattern === "boolean"
        || typeof pattern === "bigint"
        || pattern === null
        || pattern === undefined) {
        return input === pattern;
    }
    else if (typeof pattern === "function") {
        return pattern(input);
    }
    else if (pattern instanceof Array && input instanceof Array) {
        for (const key in pattern) {
            if (!isMatch(input[key], pattern[key])) {
                return false;
            }
        }
        return true;
    }
    else if (pattern
        && typeof pattern === "object"
        && SymbolToolPatternFunction in pattern) {
        return pattern[SymbolToolPatternFunction](input);
    }
    else if (pattern
        && typeof pattern === "object"
        && input && typeof input === "object") {
        for (const key in pattern) {
            if (!isMatch(input[key], pattern[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
}

exports.isMatch = isMatch;
