'use strict';

var pipe = require('../../pipe.cjs');
var replace = require('../../../string/replace.cjs');
var toUpperCase = require('../../../string/toUpperCase.cjs');

const driveLetterRegex = /^[A-Za-z]:$/;
function normalizeWindowsPath(path) {
    return pipe.pipe(path, replace.replace(/\\/g, "/"), replace.replace(driveLetterRegex, ({ matchedValue }) => toUpperCase.toUpperCase(matchedValue)));
}

exports.normalizeWindowsPath = normalizeWindowsPath;
