'use strict';

var includes = require('../../string/includes.cjs');

function isUnixPath(path) {
    return !includes.includes(path, "\\");
}

exports.isUnixPath = isUnixPath;
