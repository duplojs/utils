import { millisecondInOneMinute } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function addMinutes(...args) {
    if (args.length === 1) {
        const [minute] = args;
        return (input) => addMinutes(input, minute);
    }
    const [input, minute] = args;
    return TheDate.new(toTimestamp(input) + (minute * millisecondInOneMinute));
}

export { addMinutes };
