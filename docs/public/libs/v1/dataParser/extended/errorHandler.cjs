'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

/**
 * {@include dataParser/extended/errorHandler/index.md}
 */
const errorHandler = detachObjectMethod.detachObjectMethod(base.DataParserErrorHandlerExtended, "create");

exports.errorHandler = errorHandler;
