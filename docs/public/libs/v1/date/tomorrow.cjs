'use strict';

var constants = require('./constants.cjs');

/**
 * {@include date/tomorrow/index.md}
 */
function tomorrow() {
    const timestamp = Date.now() + constants.millisecondsInOneDay;
    return `date${timestamp}+`;
}

exports.tomorrow = tomorrow;
