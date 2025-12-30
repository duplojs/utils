import { toNative } from '../toNative.mjs';

function subtractYears(...args) {
    if (args.length === 1) {
        const [year] = args;
        return (input) => subtractYears(input, year);
    }
    const [input, year] = args;
    const date = toNative(input);
    date.setUTCFullYear(date.getUTCFullYear() - year);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { subtractYears };
