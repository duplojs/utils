import { millisecondInOneHour } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function addHours(...args) {
    if (args.length === 1) {
        const [hour] = args;
        return (input) => addHours(input, hour);
    }
    const [input, hour] = args;
    return TheDate.new(toTimestamp(input) + (hour * millisecondInOneHour));
}

export { addHours };
