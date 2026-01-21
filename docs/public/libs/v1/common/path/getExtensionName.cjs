'use strict';

var minElements = require('../../array/minElements.cjs');

const extensionNameRegex = /.(\.[^./]+|\.)$/;
/**
 * {@include common/path/getExtensionName/index.md}
 */
function getExtensionName(path) {
    if (path === "..") {
        return null;
    }
    const match = extensionNameRegex.exec(path);
    if (!!match && minElements.minElements(match, 2)) {
        if (match[1] === ".") {
            return null;
        }
        return match[1];
    }
    return null;
}

exports.getExtensionName = getExtensionName;
