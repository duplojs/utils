'use strict';

function last(string) {
    return string.length > 0
        ? string[string.length - 1]
        : undefined;
}

exports.last = last;
