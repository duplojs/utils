'use strict';

var theDate = require('./theDate.cjs');

/**
 * {@include date/now/index.md}
 */
function now() {
    const timestamp = Date.now();
    return theDate.TheDate.new(timestamp);
}

exports.now = now;
