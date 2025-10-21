'use strict';

var result = require('./result.cjs');
var exhaustive = require('./exhaustive.cjs');
var otherwise = require('./otherwise.cjs');
var match = require('./match.cjs');
var isMatch = require('./isMatch.cjs');
var pattern = require('./types/pattern.cjs');
var union = require('./union.cjs');
var when = require('./when.cjs');



exports.isResult = result.isResult;
exports.result = result.result;
exports.exhaustive = exhaustive.exhaustive;
exports.otherwise = otherwise.otherwise;
exports.match = match.match;
exports.isMatch = isMatch.isMatch;
exports.SymbolToolPatternFunctionLabel = pattern.SymbolToolPatternFunctionLabel;
exports.union = union.union;
exports.when = when.when;
