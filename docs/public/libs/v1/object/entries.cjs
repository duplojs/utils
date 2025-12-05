'use strict';

var wrapValue = require('../common/wrapValue.cjs');
var kind = require('../common/kind.cjs');

function entries(object) {
    return Object.entries(object)
        .filter(([key]) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key));
}

exports.entries = entries;
