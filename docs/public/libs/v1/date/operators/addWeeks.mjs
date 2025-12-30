import { millisecondInOneWeek } from '../constants.mjs';
import { toNative } from '../toNative.mjs';

function addWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => addWeeks(input, week);
    }
    const [input, week] = args;
    const date = toNative(input);
    date.setTime(date.getTime() + (week * millisecondInOneWeek));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { addWeeks };
