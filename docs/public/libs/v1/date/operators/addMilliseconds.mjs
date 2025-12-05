import { toNative } from '../toNative.mjs';

function addMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => addMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    const absoluteMilliseconds = Math.abs(millisecond);
    const date = toNative(input);
    date.setTime(date.getTime() + absoluteMilliseconds);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { addMilliseconds };
