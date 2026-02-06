'use strict';

var constants = require('./constants.cjs');
var theDate = require('./theDate.cjs');

/**
 * {@include date/tomorrow/index.md}
 */
function tomorrow() {
    const timestamp = Date.now() + constants.millisecondsInOneDay;
    return theDate.TheDate.new(timestamp);
}

exports.tomorrow = tomorrow;
