import { millisecondsInOneSecond } from '../constants.mjs';
import { toNative } from '../toNative.mjs';

function subtractSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => subtractSeconds(input, second);
    }
    const [input, second] = args;
    const date = toNative(input);
    const absoluteSecond = Math.abs(second);
    date.setTime(date.getTime() - (absoluteSecond * millisecondsInOneSecond));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { subtractSeconds };
