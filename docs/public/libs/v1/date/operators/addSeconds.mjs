import { millisecondsInOneSecond } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function addSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => addSeconds(input, second);
    }
    const [input, second] = args;
    return TheDate.new(toTimestamp(input) + (second * millisecondsInOneSecond));
}

export { addSeconds };
