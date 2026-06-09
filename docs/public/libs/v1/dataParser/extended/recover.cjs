'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const recover = detachObjectMethod.detachObjectMethod(base.DataParserRecoverExtended, "create");

exports.recover = recover;
