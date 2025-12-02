'use strict';

var wrapValue = require('../common/wrapValue.cjs');
var kind = require('../common/kind.cjs');

function keys(object) {
    return Object.keys(object)
        .filter((key) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key));
}

exports.keys = keys;
