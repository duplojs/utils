'use strict';

/**
 * {@include date/now/index.md}
 */
function now() {
    const timestamp = Date.now();
    return `date${timestamp}+`;
}

exports.now = now;
