import { millisecondInOneHour } from '../constants.mjs';
import { toNative } from '../toNative.mjs';

function subtractHours(...args) {
    if (args.length === 1) {
        const [hour] = args;
        return (input) => subtractHours(input, hour);
    }
    const [input, hour] = args;
    const date = toNative(input);
    const absoluteHour = Math.abs(hour);
    date.setTime(date.getTime() - (absoluteHour * millisecondInOneHour));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { subtractHours };
