'use strict';

var constants = require('./constants.cjs');

function yesterday() {
    const timestamp = Date.now() - constants.millisecondsInOneDay;
    return `date${timestamp}+`;
}

exports.yesterday = yesterday;
