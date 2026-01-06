'use strict';

var constants = require('./constants.cjs');

/**
 * {@include date/yesterday/index.md}
 */
function yesterday() {
    const timestamp = Date.now() - constants.millisecondsInOneDay;
    return `date${timestamp}+`;
}

exports.yesterday = yesterday;
