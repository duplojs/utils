'use strict';

var set = require('../set.cjs');
var number = require('../defaultConstraint/number.cjs');
var base = require('../../primitive/base.cjs');

/**
 * {@include clean/PositiveInt/index.md}
 */
const PositiveInt = set.createConstraintsSet(base.Number, [
    number.Positive,
    number.Int,
]);
/**
 * {@include clean/StrictPositiveInt/index.md}
 */
const StrictPositiveInt = set.createConstraintsSet(base.Number, [
    number.StrictPositive,
    number.Int,
]);
/**
 * {@include clean/NegativeInt/index.md}
 */
const NegativeInt = set.createConstraintsSet(base.Number, [
    number.Negative,
    number.Int,
]);
/**
 * {@include clean/StrictNegativeInt/index.md}
 */
const StrictNegativeInt = set.createConstraintsSet(base.Number, [
    number.StrictNegative,
    number.Int,
]);
/**
 * {@include clean/Percent/index.md}
 */
const Percent = set.createConstraintsSet(base.Number, [
    number.NumberMin(0),
    number.NumberMax(100),
]);

exports.NegativeInt = NegativeInt;
exports.Percent = Percent;
exports.PositiveInt = PositiveInt;
exports.StrictNegativeInt = StrictNegativeInt;
exports.StrictPositiveInt = StrictPositiveInt;
