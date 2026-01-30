'use strict';

var base = require('../base.cjs');
var base$1 = require('../../primitive/base.cjs');
var int = require('../../../dataParser/parsers/number/checkers/int.cjs');
var min = require('../../../dataParser/parsers/number/checkers/min.cjs');
var max = require('../../../dataParser/parsers/number/checkers/max.cjs');

/**
 * {@include clean/Int/index.md}
 */
const Int = base.createConstraint("int", base$1.Number, int.checkerInt());
/**
 * {@include clean/Positive/index.md}
 */
const Positive = base.createConstraint("positive", base$1.Number, min.checkerNumberMin(1));
/**
 * {@include clean/Negative/index.md}
 */
const Negative = base.createConstraint("negative", base$1.Number, max.checkerNumberMax(-1));
/**
 * {@include clean/NumberMin/index.md}
 */
function NumberMin(value) {
    return base.createConstraint(`number-min-${value}`, base$1.Number, min.checkerNumberMin(value));
}
/**
 * {@include clean/NumberMax/index.md}
 */
function NumberMax(value) {
    return base.createConstraint(`number-max-${value}`, base$1.Number, max.checkerNumberMax(value));
}

exports.Int = Int;
exports.Negative = Negative;
exports.NumberMax = NumberMax;
exports.NumberMin = NumberMin;
exports.Positive = Positive;
