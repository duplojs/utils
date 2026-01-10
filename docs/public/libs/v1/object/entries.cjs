'use strict';

var wrapValue = require('../common/wrapValue.cjs');
var kind = require('../common/kind.cjs');

function entries(object) {
    return Object.entries(object)
        .filter(([key]) => !wrapValue.isRuntimeWrappedValueKey(key) && !kind.isRuntimeKind(key));
}
/**
 * @deprecated Not ignore kind key.
 */
entries.unsafe = function (object) {
    return Object.entries(object);
};

exports.entries = entries;
