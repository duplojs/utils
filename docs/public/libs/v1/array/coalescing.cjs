'use strict';

function coalescing(value) {
    return value instanceof Array
        ? value
        : [value];
}

exports.coalescing = coalescing;
