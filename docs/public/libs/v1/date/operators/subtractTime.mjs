import { createTheDate } from '../createTheDate.mjs';
import { createTheTime } from '../createTheTime.mjs';
import { theTimeRegex } from '../constants.mjs';
import { toTimestamp } from '../toTimestamp.mjs';
import { is } from '../is.mjs';

function timeToTimestamp(input) {
    const match = input.match(theTimeRegex);
    const { value, sign } = match.groups;
    return Number(sign === "-" ? `-${value}` : value);
}
function subtractTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (input) => subtractTime(input, time);
    }
    const [input, time] = args;
    const timeTimestamp = timeToTimestamp(time);
    if (is(input)) {
        return createTheDate(toTimestamp(input) - timeTimestamp);
    }
    return createTheTime(timeToTimestamp(input) - timeTimestamp);
}

export { subtractTime };
