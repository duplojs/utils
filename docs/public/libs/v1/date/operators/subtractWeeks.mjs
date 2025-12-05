import { millisecondInOneWeek } from '../constants.mjs';
import { toNative } from '../toNative.mjs';

function subtractWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => subtractWeeks(input, week);
    }
    const [input, week] = args;
    const date = toNative(input);
    const absoluteWeek = Math.abs(week);
    date.setTime(date.getTime() - (absoluteWeek * millisecondInOneWeek));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { subtractWeeks };
