'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

/**
 * {@include dataParser/extended/pipe/index.md}
 */
const pipe = detachObjectMethod.detachObjectMethod(base.DataParserPipeExtended, "create");

exports.pipe = pipe;
