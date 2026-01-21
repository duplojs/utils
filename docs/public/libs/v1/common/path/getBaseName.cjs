'use strict';

var pipe = require('../pipe.cjs');
var normalizeWindowsPath = require('./utils/normalizeWindowsPath.cjs');
var split = require('../../string/split.cjs');
var findLast = require('../../array/findLast.cjs');
var length = require('../../string/length.cjs');
var endsWith = require('../../string/endsWith.cjs');
var slice = require('../../string/slice.cjs');

function getBaseName(path, params) {
    const segments = pipe.pipe(path, normalizeWindowsPath.normalizeWindowsPath, split.split("/"));
    const lastSegment = findLast.findLast(segments, (value) => length.length(value) > 0) ?? "";
    if (params?.extension && endsWith.endsWith(lastSegment, params?.extension)) {
        const extensionLength = length.length(params.extension);
        return slice.slice(lastSegment, 0, -extensionLength);
    }
    return lastSegment;
}

exports.getBaseName = getBaseName;
