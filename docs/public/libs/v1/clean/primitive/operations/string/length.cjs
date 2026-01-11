'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

/**
 * {@include clean/length/index.md}
 */
function length(primitive) {
    return wrapValue.wrapValue(unwrap.unwrap(primitive).length);
}

exports.length = length;
