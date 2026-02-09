'use strict';

var wrapValue = require('../common/wrapValue.cjs');
var kind = require('../common/kind.cjs');

/**
 * {@include object/keys/index.md}
 */
function keys(object) {
    const result = [];
    for (const key in object) {
        if (!wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key)) {
            result.push(key);
        }
    }
    return result;
}

exports.keys = keys;
