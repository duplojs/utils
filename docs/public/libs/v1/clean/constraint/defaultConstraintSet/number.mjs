import { createConstraintsSet } from '../set.mjs';
import { Positive, Int, StrictPositive, Negative, StrictNegative, NumberMin, NumberMax } from '../defaultConstraint/number.mjs';
import { Number } from '../../primitive/base.mjs';

/**
 * {@include clean/PositiveInt/index.md}
 */
const PositiveInt = createConstraintsSet(Number, [
    Positive,
    Int,
]);
/**
 * {@include clean/StrictPositiveInt/index.md}
 */
const StrictPositiveInt = createConstraintsSet(Number, [
    StrictPositive,
    Int,
]);
/**
 * {@include clean/NegativeInt/index.md}
 */
const NegativeInt = createConstraintsSet(Number, [
    Negative,
    Int,
]);
/**
 * {@include clean/StrictNegativeInt/index.md}
 */
const StrictNegativeInt = createConstraintsSet(Number, [
    StrictNegative,
    Int,
]);
/**
 * {@include clean/Percent/index.md}
 */
const Percent = createConstraintsSet(Number, [
    NumberMin(0),
    NumberMax(100),
]);

export { NegativeInt, Percent, PositiveInt, StrictNegativeInt, StrictPositiveInt };
