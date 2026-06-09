'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const array = detachObjectMethod.detachObjectMethod(base.DataParserArrayExtended, "create");

exports.array = array;
