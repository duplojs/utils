import { makeSafeTimeValue } from './makeSafeTimeValue.mjs';
import { TheTime } from './theTime.mjs';
import { toTimestamp } from './toTimestamp.mjs';

function getDifference(...args) {
    if (args.length === 1) {
        const [reference] = args;
        return (input) => getDifference(input, reference);
    }
    const inputTimestamp = toTimestamp(args[0]);
    const referenceTimestamp = toTimestamp(args[1]);
    return TheTime.new(makeSafeTimeValue(inputTimestamp - referenceTimestamp));
}

export { getDifference };
