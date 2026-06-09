'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const union = detachObjectMethod.detachObjectMethod(base.DataParserUnionExtended, "create");

exports.union = union;
