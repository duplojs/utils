import { millisecondInOneHour } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function subtractHours(...args) {
    if (args.length === 1) {
        const [hour] = args;
        return (input) => subtractHours(input, hour);
    }
    const [input, hour] = args;
    return TheDate.new(toTimestamp(input) - (hour * millisecondInOneHour));
}

export { subtractHours };
