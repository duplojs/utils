'use strict';

var theDate = require('./theDate.cjs');

/**
 * {@include date/is/index.md}
 */
function is(input) {
    if (input instanceof theDate.TheDate) {
        return true;
    }
    return false;
}

exports.is = is;
