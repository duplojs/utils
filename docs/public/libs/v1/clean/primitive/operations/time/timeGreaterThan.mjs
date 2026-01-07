import { greaterThanTime } from '../../../../date/operators/greaterThanTime.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function timeGreaterThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => timeGreaterThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return greaterThanTime(unwrap(primitive), unwrap(threshold));
}

export { timeGreaterThan };
