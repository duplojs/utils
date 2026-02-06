import { millisecondsInOneSecond } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function subtractSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => subtractSeconds(input, second);
    }
    const [input, second] = args;
    return TheDate.new(toTimestamp(input) - (second * millisecondsInOneSecond));
}

export { subtractSeconds };
