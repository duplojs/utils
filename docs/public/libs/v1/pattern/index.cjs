'use strict';

var result = require('./result.cjs');
var exhaustive = require('./exhaustive.cjs');
var otherwise = require('./otherwise.cjs');
var index = require('./match/index.cjs');
var isMatch = require('./isMatch.cjs');
var union = require('./union.cjs');
var when = require('./when.cjs');
var builder = require('./match/builder.cjs');
var pattern = require('./types/pattern.cjs');

/**
 * {@include pattern/index.md}
 */

exports.isResult = result.isResult;
exports.result = result.result;
exports.exhaustive = exhaustive.exhaustive;
exports.otherwise = otherwise.otherwise;
exports.match = index.match;
exports.isMatch = isMatch.isMatch;
exports.union = union.union;
exports.when = when.when;
exports.InvalidExhaustivePatternError = builder.InvalidExhaustivePatternError;
exports.matchBuilder = builder.matchBuilder;
exports.SymbolToolPatternFunctionLabel = pattern.SymbolToolPatternFunctionLabel;
