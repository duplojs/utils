'use strict';

var pipe = require('../pipe.cjs');
var isAbsolute = require('./isAbsolute.cjs');
var slice = require('../../array/slice.cjs');
var split = require('../../string/split.cjs');
var replace = require('../../string/replace.cjs');
var join = require('../../array/join.cjs');

/**
 * {@include common/path/getParentFolderPath/index.md}
 */
function getParentFolderPath(path) {
    const segments = pipe.pipe(path, replace.replace(/\/$/, ""), split.split("/"), slice.slice(0, -1));
    return join.join(segments, "/")
        || (isAbsolute.isAbsolute(path)
            ? "/"
            : ".");
}

exports.getParentFolderPath = getParentFolderPath;
