'use strict';

var split = require('../../string/split.cjs');
var findLast = require('../../array/findLast.cjs');
var length = require('../../string/length.cjs');
var endsWith = require('../../string/endsWith.cjs');
var slice = require('../../string/slice.cjs');

/**
 * {@include common/path/getBaseName/index.md}
 */
function getBaseName(path, params) {
    const segments = split.split(path, "/");
    const lastSegment = findLast.findLast(segments, (value) => length.length(value) > 0) ?? null;
    if (!lastSegment || lastSegment === "..") {
        return null;
    }
    if (params?.extension && endsWith.endsWith(lastSegment, params?.extension)) {
        const extensionLength = length.length(params.extension);
        return slice.slice(lastSegment, 0, -extensionLength);
    }
    return lastSegment;
}

exports.getBaseName = getBaseName;
