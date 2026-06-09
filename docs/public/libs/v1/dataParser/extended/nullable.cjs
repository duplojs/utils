'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const nullable = detachObjectMethod.detachObjectMethod(base.DataParserNullableExtended, "create");

exports.nullable = nullable;
