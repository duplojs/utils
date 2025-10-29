'use strict';

var kind = require('../common/kind.cjs');
var wrapValue = require('../common/wrapValue.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');

function keys(object) {
    return Object.keys(object)
        .filter((key) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key));
}

exports.keys = keys;
