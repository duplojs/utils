import { toNative } from '../toNative.mjs';
import { millisecondsInOneDay } from '../constants.mjs';

function addDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => addDays(input, day);
    }
    const [input, day] = args;
    const date = toNative(input);
    date.setTime(date.getTime() + (day * millisecondsInOneDay));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { addDays };
