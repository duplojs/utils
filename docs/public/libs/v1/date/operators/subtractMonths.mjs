import { toNative } from '../toNative.mjs';

function subtractMonths(...args) {
    if (args.length === 1) {
        const [month] = args;
        return (input) => subtractMonths(input, month);
    }
    const [input, month] = args;
    const date = toNative(input);
    date.setUTCMonth(date.getUTCMonth() - month);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { subtractMonths };
