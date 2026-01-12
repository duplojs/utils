import { millisecondsInOneSecond, millisecondInOneMinute, millisecondInOneHour, millisecondsInOneDay, millisecondInOneWeek } from './constants.mjs';
import { toTimeValue } from './toTimeValue.mjs';

const formatStringRegex = /WW|DD|HH|mm|ss|SSS/g;
function formatTime(...args) {
    if (args.length === 1) {
        const [formatString] = args;
        return (input) => formatTime(input, formatString);
    }
    const [input, formatString] = args;
    const timeValue = toTimeValue(input);
    const isNegative = timeValue < 0;
    let remaining = Math.abs(timeValue);
    const weeks = Math.floor(remaining / millisecondInOneWeek);
    remaining -= weeks * millisecondInOneWeek;
    const days = Math.floor(remaining / millisecondsInOneDay);
    remaining -= days * millisecondsInOneDay;
    const hours = Math.floor(remaining / millisecondInOneHour);
    remaining -= hours * millisecondInOneHour;
    const minutes = Math.floor(remaining / millisecondInOneMinute);
    remaining -= minutes * millisecondInOneMinute;
    const seconds = Math.floor(remaining / millisecondsInOneSecond);
    remaining -= seconds * millisecondsInOneSecond;
    const tokens = {
        WW: weeks.toString().padStart(2, "0"),
        DD: days.toString().padStart(2, "0"),
        HH: hours.toString().padStart(2, "0"),
        mm: minutes.toString().padStart(2, "0"),
        ss: seconds.toString().padStart(2, "0"),
        SSS: remaining.toString().padStart(3, "0"),
    };
    const formatted = formatString.replace(formatStringRegex, (token) => tokens[token]);
    return isNegative ? `-${formatted}` : formatted;
}

export { formatTime };
