import { millisecondsInOneDay } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function subtractDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => subtractDays(input, day);
    }
    const [input, day] = args;
    return TheDate.new(toTimestamp(input) - (day * millisecondsInOneDay));
}

export { subtractDays };
