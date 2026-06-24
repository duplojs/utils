'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

/**
 * {@include dataParser/extended/recover/index.md}
 */
const recover = detachObjectMethod.detachObjectMethod(base.DataParserRecoverExtended, "create");

exports.recover = recover;
