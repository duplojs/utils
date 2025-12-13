import { createConstraint } from '../base.mjs';
import { Number } from '../../primitive/base.mjs';
import { checkerInt } from '../../../dataParser/parsers/number/checkers/int.mjs';
import { checkerNumberMin } from '../../../dataParser/parsers/number/checkers/min.mjs';
import { checkerNumberMax } from '../../../dataParser/parsers/number/checkers/max.mjs';

const Int = createConstraint("int", Number, checkerInt());
const Positive = createConstraint("positive", Number, checkerNumberMin(1));
const Negative = createConstraint("negative", Number, checkerNumberMax(-1));

export { Int, Negative, Positive };
