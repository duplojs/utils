import { createConstraint } from '../base.mjs';
import { Number } from '../../primitive/base.mjs';
import { checkerInt } from '../../../dataParser/parsers/number/checkers/int.mjs';
import { checkerNumberMin } from '../../../dataParser/parsers/number/checkers/min.mjs';
import { checkerNumberMax } from '../../../dataParser/parsers/number/checkers/max.mjs';

/**
 * {@include clean/Int/index.md}
 */
const Int = createConstraint("int", Number, checkerInt());
/**
 * {@include clean/Positive/index.md}
 */
const Positive = createConstraint("positive", Number, checkerNumberMin(0));
/**
 * {@include clean/StrictPositive/index.md}
 */
const StrictPositive = createConstraint("strict-positive", Number, checkerNumberMin(0, { exclusive: true }));
/**
 * {@include clean/Negative/index.md}
 */
const Negative = createConstraint("negative", Number, checkerNumberMax(0));
/**
 * {@include clean/StrictNegative/index.md}
 */
const StrictNegative = createConstraint("strict-negative", Number, checkerNumberMax(0, { exclusive: true }));
/**
 * {@include clean/NumberMin/index.md}
 */
function NumberMin(value) {
    return createConstraint(`number-min-${value}`, Number, checkerNumberMin(value));
}
/**
 * {@include clean/NumberMax/index.md}
 */
function NumberMax(value) {
    return createConstraint(`number-max-${value}`, Number, checkerNumberMax(value));
}

export { Int, Negative, NumberMax, NumberMin, Positive, StrictNegative, StrictPositive };
