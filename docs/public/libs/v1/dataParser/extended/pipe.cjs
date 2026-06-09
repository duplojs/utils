'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const pipe = detachObjectMethod.detachObjectMethod(base.DataParserPipeExtended, "create");

exports.pipe = pipe;
