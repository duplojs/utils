import { toNative } from '../toNative.mjs';

function subtractMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => subtractMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    const date = toNative(input);
    const absoluteMillisecond = Math.abs(millisecond);
    date.setTime(date.getTime() - absoluteMillisecond);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { subtractMilliseconds };
