'use strict';

var constants = require('./constants.cjs');

function tomorrow() {
    const timestamp = Date.now() + constants.millisecondsInOneDay;
    return `date${timestamp}+`;
}

exports.tomorrow = tomorrow;
