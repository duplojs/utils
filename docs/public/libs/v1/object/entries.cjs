'use strict';

var kind = require('../common/kind.cjs');
var wrapValue = require('../common/wrapValue.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');

function entries(object) {
    return Object.entries(object)
        .filter(([key]) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key));
}

exports.entries = entries;
