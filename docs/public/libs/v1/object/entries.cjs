'use strict';

var wrapValue = require('../common/wrapValue.cjs');
var kind = require('../common/kind.cjs');

/**
 * {@include object/entries/index.md}
 */
function entries(object) {
    const result = [];
    for (const key in object) {
        if (!wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key)) {
            result.push([key, object[key]]);
        }
    }
    return result;
}
/**
 * @deprecated Not ignore kind key.
 */
entries.unsafe = function (object) {
    return Object.entries(object);
};

exports.entries = entries;
