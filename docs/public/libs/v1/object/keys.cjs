'use strict';

var wrapValue = require('../common/wrapValue.cjs');
var kind = require('../common/kind.cjs');

/**
 * {@include object/keys/index.md}
 */
function keys(object) {
    return Object.keys(object)
        .filter((key) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key));
}

exports.keys = keys;
