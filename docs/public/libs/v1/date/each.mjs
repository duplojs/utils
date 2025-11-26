import { loop } from '../generator/loop.mjs';
import { millisecondsInOneDay, millisecondInOneHour, millisecondInOneMinute, millisecondsInOneSecond } from './constants.mjs';
import { toTimestamp } from './toTimestamp.mjs';
import { createOrThrow } from './createOrThrow.mjs';

const stepMapper = {
    millisecond: (timestamp, direction) => timestamp + direction,
    second: (timestamp, direction) => timestamp + (direction * millisecondsInOneSecond),
    minute: (timestamp, direction) => timestamp + (direction * millisecondInOneMinute),
    hour: (timestamp, direction) => timestamp + (direction * millisecondInOneHour),
    day: (timestamp, direction) => timestamp + (direction * millisecondsInOneDay),
    month: (timestamp, direction) => {
        const date = new Date(timestamp);
        date.setUTCMonth(date.getUTCMonth() + direction);
        return date.getTime();
    },
    year: (timestamp, direction) => {
        const date = new Date(timestamp);
        date.setUTCFullYear(date.getUTCFullYear() + direction);
        return date.getTime();
    },
};
function each(range, unit = "day") {
    const startTimestamp = toTimestamp(range.start);
    const endTimestamp = toTimestamp(range.end);
    const direction = startTimestamp <= endTimestamp ? 1 : -1;
    const advanceTimestamp = stepMapper[unit];
    return loop(({ exit, next, previousOutput, }) => {
        if (!previousOutput) {
            return next(range.start);
        }
        const currentTimestamp = advanceTimestamp(toTimestamp(previousOutput), direction);
        const isWithinRange = direction === 1
            ? currentTimestamp < endTimestamp
            : currentTimestamp > endTimestamp;
        if (!isWithinRange) {
            return exit(currentTimestamp === endTimestamp
                ? createOrThrow(currentTimestamp)
                : undefined);
        }
        return next(createOrThrow(currentTimestamp));
    });
}

export { each };
