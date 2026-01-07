import { addTime } from '../../../../date/operators/addTime.mjs';
import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function dateAddTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (primitive) => dateAddTime(primitive, time);
    }
    const [primitive, time] = args;
    return wrapValue(addTime(unwrap(primitive), unwrap(time)));
}

export { dateAddTime };
