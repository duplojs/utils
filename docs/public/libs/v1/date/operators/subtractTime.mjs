import { createTheDate } from '../createTheDate.mjs';
import { createTheTime } from '../createTheTime.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function subtractTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (input) => subtractTime(input, time);
    }
    const [input, time] = args;
    const timeTimestamp = toTimestamp(time);
    if (input.startsWith("date")) {
        return createTheDate(toTimestamp(input) - timeTimestamp);
    }
    return createTheTime(toTimestamp(input) - timeTimestamp);
}

export { subtractTime };
