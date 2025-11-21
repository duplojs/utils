'use strict';

var kind = require('../common/kind.cjs');
var wrapValue = require('../common/wrapValue.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');

function values(object) {
    return Object.entries(object)
        .filter(([key]) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key))
        .map(([, value]) => value);
}

exports.values = values;
