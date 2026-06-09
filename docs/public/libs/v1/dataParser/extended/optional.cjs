'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const optional = detachObjectMethod.detachObjectMethod(base.DataParserOptionalExtended, "create");

exports.optional = optional;
