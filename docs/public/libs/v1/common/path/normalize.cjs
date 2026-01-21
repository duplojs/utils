'use strict';

var isAbsolute = require('./isAbsolute.cjs');
var normalizeWindowsPath = require('./utils/normalizeWindowsPath.cjs');
var normalizeString = require('./utils/normalizeString.cjs');
var length = require('../../string/length.cjs');
var endsWith = require('../../string/endsWith.cjs');
var concat = require('../../string/concat.cjs');
var test = require('../../string/test.cjs');

const driveLetterRegex = /^[A-Za-z]:$/;
function normalize(path) {
    if (length.length(path) === 0) {
        return ".";
    }
    const localPath = normalizeWindowsPath.normalizeWindowsPath(path);
    const isPathAbsolute = isAbsolute.isAbsolute(localPath);
    const trailingSeparator = endsWith.endsWith(localPath, "/");
    let normalizedPath = normalizeString.normalizeString(localPath, { allowAboveRoot: !isPathAbsolute });
    if (length.length(normalizedPath) === 0) {
        if (isPathAbsolute) {
            return "/";
        }
        return trailingSeparator ? "./" : ".";
    }
    if (trailingSeparator) {
        normalizedPath = concat.concat(normalizedPath, "/");
    }
    if (driveLetterRegex.test(normalizedPath)) {
        normalizedPath = concat.concat(normalizedPath, "/");
    }
    if (test.test(localPath, /^[/\\]{2}/)) {
        if (!isPathAbsolute) {
            return `//./${normalizedPath}`;
        }
        return `//${normalizedPath}`;
    }
    const isPathNormalizedAbsolute = isAbsolute.isAbsolute(normalizedPath);
    return isPathAbsolute && !isPathNormalizedAbsolute
        ? `/${normalizedPath}`
        : normalizedPath;
}

exports.normalize = normalize;
