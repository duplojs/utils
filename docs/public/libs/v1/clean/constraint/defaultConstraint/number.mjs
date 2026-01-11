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
const Positive = createConstraint("positive", Number, checkerNumberMin(1));
/**
 * {@include clean/Negative/index.md}
 */
const Negative = createConstraint("negative", Number, checkerNumberMax(-1));

export { Int, Negative, Positive };
