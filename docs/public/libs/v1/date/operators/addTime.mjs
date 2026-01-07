import { createTheDate } from '../createTheDate.mjs';
import { createTheTime } from '../createTheTime.mjs';
import { toTimestamp } from '../toTimestamp.mjs';
import { toTimeValue } from '../toTimeValue.mjs';

function addTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (input) => addTime(input, time);
    }
    const [input, time] = args;
    const timeTimestamp = toTimeValue(time);
    if (input.startsWith("date")) {
        return createTheDate(toTimestamp(input) + timeTimestamp);
    }
    return createTheTime(toTimeValue(input) + timeTimestamp);
}

export { addTime };
