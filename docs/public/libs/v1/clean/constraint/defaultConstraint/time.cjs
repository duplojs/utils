'use strict';

var base = require('../base.cjs');
var base$1 = require('../../primitive/base.cjs');
var min = require('../../../dataParser/parsers/time/checkers/min.cjs');
var theTime = require('../../../date/theTime.cjs');
var max = require('../../../dataParser/parsers/time/checkers/max.cjs');

/**
 * {@include clean/PositiveTime/index.md}
 */
const PositiveTime = base.createConstraint("positive-time", base$1.Time, min.checkerTimeMin(theTime.TheTime.new(1)));
/**
 * {@include clean/NegativeTime/index.md}
 */
const NegativeTime = base.createConstraint("negative-time", base$1.Time, max.checkerTimeMax(theTime.TheTime.new(-1)));

exports.NegativeTime = NegativeTime;
exports.PositiveTime = PositiveTime;
