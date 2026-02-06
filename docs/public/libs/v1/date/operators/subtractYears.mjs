import { TheDate } from '../theDate.mjs';
import { toNative } from '../toNative.mjs';

function subtractYears(...args) {
    if (args.length === 1) {
        const [year] = args;
        return (input) => subtractYears(input, year);
    }
    const [input, year] = args;
    const date = toNative(input);
    date.setUTCFullYear(date.getUTCFullYear() - year);
    return TheDate.new(date.getTime());
}

export { subtractYears };
