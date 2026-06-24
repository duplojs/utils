'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

/**
 * {@include dataParser/extended/union/index.md}
 */
const union = detachObjectMethod.detachObjectMethod(base.DataParserUnionExtended, "create");

exports.union = union;
