import { millisecondsInOneSecond } from '../constants.mjs';
import { toNative } from '../toNative.mjs';

function addSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => addSeconds(input, second);
    }
    const [input, second] = args;
    const date = toNative(input);
    date.setTime(date.getTime() + (second * millisecondsInOneSecond));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { addSeconds };
