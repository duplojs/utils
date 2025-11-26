import { millisecondInOneMinute } from '../constants.mjs';
import { toNative } from '../toNative.mjs';

function subtractMinutes(...args) {
    if (args.length === 1) {
        const [minute] = args;
        return (input) => subtractMinutes(input, minute);
    }
    const [input, minute] = args;
    const date = toNative(input);
    const absoluteMinute = Math.abs(minute);
    date.setTime(date.getTime() - (absoluteMinute * millisecondInOneMinute));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { subtractMinutes };
