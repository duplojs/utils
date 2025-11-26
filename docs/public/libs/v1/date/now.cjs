'use strict';

function now() {
    const timestamp = Date.now();
    return `date${timestamp}+`;
}

exports.now = now;
