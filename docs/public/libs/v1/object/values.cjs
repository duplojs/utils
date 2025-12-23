'use strict';

var wrapValue = require('../common/wrapValue.cjs');
var kind = require('../common/kind.cjs');

function values(object) {
    return Object.entries(object)
        .filter(([key]) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key))
        .map(([, value]) => value);
}

exports.values = values;
