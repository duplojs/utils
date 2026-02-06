import { createConstraint } from '../base.mjs';
import { Time } from '../../primitive/base.mjs';
import { checkerTimeMin } from '../../../dataParser/parsers/time/checkers/min.mjs';
import { TheTime } from '../../../date/theTime.mjs';
import { checkerTimeMax } from '../../../dataParser/parsers/time/checkers/max.mjs';

/**
 * {@include clean/PositiveTime/index.md}
 */
const PositiveTime = createConstraint("positive-time", Time, checkerTimeMin(TheTime.new(1)));
/**
 * {@include clean/NegativeTime/index.md}
 */
const NegativeTime = createConstraint("negative-time", Time, checkerTimeMax(TheTime.new(-1)));

export { NegativeTime, PositiveTime };
