'use strict';

var map = require('./map.cjs');
var execute = require('./execute.cjs');
var asyncMap = require('./asyncMap.cjs');
var filter = require('./filter.cjs');
var asyncFilter = require('./asyncFilter.cjs');
var reduce = require('./reduce.cjs');
var asyncReduce = require('./asyncReduce.cjs');
var loop = require('./loop.cjs');
var asyncLoop = require('./asyncLoop.cjs');



exports.map = map.map;
exports.execute = execute.execute;
exports.asyncMap = asyncMap.asyncMap;
exports.filter = filter.filter;
exports.asyncFilter = asyncFilter.asyncFilter;
exports.reduce = reduce.reduce;
exports.reduceFrom = reduce.reduceFrom;
exports.asyncReduce = asyncReduce.asyncReduce;
exports.loop = loop.loop;
exports.asyncLoop = asyncLoop.asyncLoop;
