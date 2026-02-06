'use strict';

var theDate = require('./theDate.cjs');

/**
 * {@include date/today/index.md}
 */
function today() {
    const timestamp = new Date().setUTCHours(0, 0, 0, 0);
    return theDate.TheDate.new(timestamp);
}

exports.today = today;
