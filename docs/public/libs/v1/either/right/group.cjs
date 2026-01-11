'use strict';

var pipe = require('../../common/pipe.cjs');
var whenNot = require('../../common/whenNot.cjs');
var when = require('../../common/when.cjs');
var isType = require('../../common/isType.cjs');
var reduce = require('../../array/reduce.cjs');
var when$1 = require('./when.cjs');
var entries = require('../../object/entries.cjs');
var success = require('./success.cjs');
var is = require('../left/is.cjs');

/**
 * {@include either/group/index.md}
 */
function group(group) {
    return pipe.pipe(group, entries.entries, reduce.reduce(reduce.reduceFrom({}), ({ element: [key, value], lastValue, nextWithObject, exit }) => pipe.pipe(value, when.when(isType.isType("function"), (getter) => getter()), when.when(is.isLeft, exit), when$1.whenIsRight((data) => nextWithObject(lastValue, { [key]: data })))), whenNot.whenNot(is.isLeft, success.success));
}

exports.group = group;
