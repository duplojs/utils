'use strict';

var isAbsolute = require('./isAbsolute.cjs');
var getParentFolderPath = require('./getParentFolderPath.cjs');
var getBaseName = require('./getBaseName.cjs');
var getExtensionName = require('./getExtensionName.cjs');
var resolveFrom = require('./resolveFrom.cjs');
var resolveRelative = require('./resolveRelative.cjs');

/**
 * {@include common/path/index.md}
 */

exports.isAbsolute = isAbsolute.isAbsolute;
exports.getParentFolderPath = getParentFolderPath.getParentFolderPath;
exports.getBaseName = getBaseName.getBaseName;
exports.getExtensionName = getExtensionName.getExtensionName;
exports.resolveFrom = resolveFrom.resolveFrom;
exports.resolveRelative = resolveRelative.resolveRelative;
