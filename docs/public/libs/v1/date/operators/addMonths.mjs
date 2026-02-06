import { TheDate } from '../theDate.mjs';
import { toNative } from '../toNative.mjs';

function addMonths(...args) {
    if (args.length === 1) {
        const [month] = args;
        return (input) => addMonths(input, month);
    }
    const [input, month] = args;
    const date = toNative(input);
    date.setUTCMonth(date.getUTCMonth() + month);
    return TheDate.new(date.getTime());
}

export { addMonths };
