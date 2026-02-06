import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function addMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => addMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    return TheDate.new(toTimestamp(input) + millisecond);
}

export { addMilliseconds };
