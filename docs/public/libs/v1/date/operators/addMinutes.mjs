import { millisecondInOneMinute } from '../constants.mjs';
import { toNative } from '../toNative.mjs';

function addMinutes(...args) {
    if (args.length === 1) {
        const [minute] = args;
        return (input) => addMinutes(input, minute);
    }
    const [input, minute] = args;
    const date = toNative(input);
    date.setTime(date.getTime() + (minute * millisecondInOneMinute));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { addMinutes };
