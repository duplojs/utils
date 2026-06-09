'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const transform = detachObjectMethod.detachObjectMethod(base.DataParserTransformExtended, "create");

exports.transform = transform;
