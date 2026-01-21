'use strict';

var normalizeWindowsPath = require('./utils/normalizeWindowsPath.cjs');
var minElements = require('../../array/minElements.cjs');

const extensionNameRegex = /.(\.[^./]+|\.)$/;
function getExtensionName(path) {
    if (path === "..") {
        return "";
    }
    const match = extensionNameRegex.exec(normalizeWindowsPath.normalizeWindowsPath(path));
    if (!!match && minElements.minElements(match, 2)) {
        return match[1];
    }
    return "";
}

exports.getExtensionName = getExtensionName;
