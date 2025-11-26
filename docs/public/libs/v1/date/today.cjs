'use strict';

function today() {
    const timestamp = new Date().setUTCHours(0, 0, 0, 0);
    return `date${timestamp}+`;
}

exports.today = today;
