'use strict';

var startsWith = require('../../string/startsWith.cjs');
var test = require('../../string/test.cjs');

const isRelativeRegex = /(^|\/)\.\.(?=\/|$)/;
/**
 * {@include common/path/isAbsolute/index.md}
 */
function isAbsolute(path) {
    return startsWith.startsWith(path, "/")
        && !test.test(path, isRelativeRegex);
}

exports.isAbsolute = isAbsolute;
