import { millisecondInOneHour } from '../constants.mjs';
import { toNative } from '../toNative.mjs';

function addHours(...args) {
    if (args.length === 1) {
        const [hour] = args;
        return (input) => addHours(input, hour);
    }
    const [input, hour] = args;
    const absoluteHour = Math.abs(hour);
    const date = toNative(input);
    date.setTime(date.getTime() + (absoluteHour * millisecondInOneHour));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { addHours };
