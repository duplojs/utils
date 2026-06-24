'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

/**
 * {@include dataParser/extended/array/index.md}
 */
const array = detachObjectMethod.detachObjectMethod(base.DataParserArrayExtended, "create");

exports.array = array;
