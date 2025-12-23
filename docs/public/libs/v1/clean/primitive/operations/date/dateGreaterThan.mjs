import { greaterThan } from '../../../../date/operators/greaterThan.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function dateGreaterThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => dateGreaterThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return greaterThan(unwrap(primitive), unwrap(threshold));
}

export { dateGreaterThan };
