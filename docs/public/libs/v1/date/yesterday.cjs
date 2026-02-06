'use strict';

var constants = require('./constants.cjs');
var theDate = require('./theDate.cjs');

/**
 * {@include date/yesterday/index.md}
 */
function yesterday() {
    const timestamp = Date.now() - constants.millisecondsInOneDay;
    return theDate.TheDate.new(timestamp);
}

exports.yesterday = yesterday;
