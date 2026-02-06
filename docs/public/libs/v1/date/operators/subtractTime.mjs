import { toTimestamp } from '../toTimestamp.mjs';
import { toTimeValue } from '../toTimeValue.mjs';
import { TheDate } from '../theDate.mjs';
import { TheTime } from '../theTime.mjs';
import { isSerializedTheTime } from '../isSerializedTheTime.mjs';

function subtractTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (input) => subtractTime(input, time);
    }
    const [input, time] = args;
    const timeValue = toTimeValue(time);
    if (input instanceof TheDate) {
        const timestamp = toTimestamp(input);
        return TheDate.new(timestamp - timeValue);
    }
    if (input instanceof TheTime || isSerializedTheTime(input)) {
        const inputTimeValue = toTimeValue(input);
        return TheTime.new(inputTimeValue - timeValue);
    }
    const timestamp = toTimestamp(input);
    return TheDate.new(timestamp - timeValue);
}

export { subtractTime };
