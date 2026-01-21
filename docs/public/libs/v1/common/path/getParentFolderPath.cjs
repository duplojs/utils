'use strict';

var normalizeWindowsPath = require('./utils/normalizeWindowsPath.cjs');
var pipe = require('../pipe.cjs');
var path = require('path');
var slice = require('../../array/slice.cjs');
var split = require('../../string/split.cjs');
var replace = require('../../string/replace.cjs');
var minElements = require('../../array/minElements.cjs');
var test = require('../../string/test.cjs');
var join = require('../../array/join.cjs');

const driveLetterRegex = /^[A-Za-z]:$/;
function getParentFolderPath(path$1) {
    const segments = pipe.pipe(path$1, normalizeWindowsPath.normalizeWindowsPath, replace.replace(/\/$/, ""), split.split("/"), slice.slice(0, -1));
    if (minElements.minElements(segments, 1)
        && test.test(segments[0], driveLetterRegex)) {
        segments[0] += "/";
    }
    return join.join(segments, "/")
        || (path.isAbsolute(path$1)
            ? "/"
            : ".");
}

exports.getParentFolderPath = getParentFolderPath;
