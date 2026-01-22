'use strict';

var minElements = require('../../array/minElements.cjs');

const extensionNameRegex = /\.([^./]+)$/;
/**
 * {@include common/path/getExtensionName/index.md}
 */
function getExtensionName(path) {
    const match = extensionNameRegex.exec(path);
    if (!!match && minElements.minElements(match, 2)) {
        return match[1];
    }
    return null;
}

exports.getExtensionName = getExtensionName;
