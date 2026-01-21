'use strict';

var isAbsolute = require('./isAbsolute.cjs');
var isUnixPath = require('./isUnixPath.cjs');
var normalize = require('./normalize.cjs');
var join = require('./join.cjs');
var getParentFolderPath = require('./getParentFolderPath.cjs');
var getBaseName = require('./getBaseName.cjs');
var getExtensionName = require('./getExtensionName.cjs');
var resolveFrom = require('./resolveFrom.cjs');

/**
 * {@include common/path/index.md}
 */

exports.isAbsolute = isAbsolute.isAbsolute;
exports.isUnixPath = isUnixPath.isUnixPath;
exports.normalize = normalize.normalize;
exports.join = join.join;
exports.getParentFolderPath = getParentFolderPath.getParentFolderPath;
exports.getBaseName = getBaseName.getBaseName;
exports.getExtensionName = getExtensionName.getExtensionName;
exports.resolveFrom = resolveFrom.resolveFrom;
