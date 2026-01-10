'use strict';

var wrapValue = require('../common/wrapValue.cjs');
var kind = require('../common/kind.cjs');

function countKeys(object) {
    return Object.keys(object)
        .filter((key) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key))
        .length;
}

exports.countKeys = countKeys;
