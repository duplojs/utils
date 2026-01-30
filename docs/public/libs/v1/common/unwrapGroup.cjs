'use strict';

var unwrap = require('./unwrap.cjs');

/**
 * {@include common/unwrapGroup/index.md}
 */
function unwrapGroup(group) {
    const result = {};
    for (const key in group) {
        result[key] = unwrap.unwrap(group[key]);
    }
    return result;
}

exports.unwrapGroup = unwrapGroup;
