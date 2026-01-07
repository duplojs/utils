'use strict';

var asyncPipe = require('../../common/asyncPipe.cjs');
var whenNot = require('../../common/whenNot.cjs');
var asyncReduce = require('../../generator/asyncReduce.cjs');
var reduce = require('../../generator/reduce.cjs');
var entries = require('../../object/entries.cjs');
var success = require('./success.cjs');
var is = require('../left/is.cjs');
var when = require('../../common/when.cjs');
var isType = require('../../common/isType.cjs');
var when$1 = require('./when.cjs');

/**
 * {@include either/asyncGroup/index.md}
 */
function asyncGroup(group) {
    return asyncPipe.asyncPipe(group, entries.entries, asyncReduce.asyncReduce(reduce.reduceFrom({}), ({ element: [key, value], lastValue, nextWithObject, exit }) => asyncPipe.asyncPipe(value, when.when(isType.isType("function"), (getter) => getter()), when.when(is.isLeft, exit), when$1.whenIsRight((data) => nextWithObject(lastValue, { [key]: data })))), whenNot.whenNot(is.isLeft, success.success));
}

exports.asyncGroup = asyncGroup;
