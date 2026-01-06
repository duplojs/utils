import { subtractTime } from '../../../../date/operators/subtractTime.mjs';
import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function dateSubtractTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (primitive) => dateSubtractTime(primitive, time);
    }
    const [primitive, time] = args;
    return wrapValue(subtractTime(unwrap(primitive), unwrap(time)));
}

export { dateSubtractTime };
