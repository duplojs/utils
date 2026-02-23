import { millisecondsInOneSecond, millisecondInOneMinute, millisecondInOneHour, millisecondsInOneDay, millisecondInOneWeek } from './constants.mjs';
import { toTimeValue } from './toTimeValue.mjs';

const unitMapper = {
    week: 1 / millisecondInOneWeek,
    day: 1 / millisecondsInOneDay,
    hour: 1 / millisecondInOneHour,
    minute: 1 / millisecondInOneMinute,
    second: 1 / millisecondsInOneSecond,
    millisecond: 1,
};
function computeTime(...args) {
    if (args.length === 1) {
        const [unit] = args;
        return (input) => computeTime(input, unit);
    }
    const [input, unit] = args;
    return toTimeValue(input) * unitMapper[unit];
}

export { computeTime };
