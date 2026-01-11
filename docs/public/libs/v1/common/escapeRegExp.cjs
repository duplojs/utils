'use strict';

/**
 * {@include common/escapeRegExp/index.md}
 */
function escapeRegExp(input) {
    return input.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

exports.escapeRegExp = escapeRegExp;
