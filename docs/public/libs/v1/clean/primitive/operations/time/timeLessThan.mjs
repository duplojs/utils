import { lessThanTime } from '../../../../date/operators/lessThanTime.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function timeLessThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => timeLessThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return lessThanTime(unwrap(primitive), unwrap(threshold));
}

export { timeLessThan };
