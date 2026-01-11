'use strict';

/**
 * {@include array/coalescing/index.md}
 */
function coalescing(value) {
    return value instanceof Array
        ? value
        : [value];
}

exports.coalescing = coalescing;
