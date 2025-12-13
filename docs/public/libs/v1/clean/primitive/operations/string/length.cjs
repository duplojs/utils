'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function length(primitive) {
    return wrapValue.wrapValue(unwrap.unwrap(primitive).length);
}

exports.length = length;
