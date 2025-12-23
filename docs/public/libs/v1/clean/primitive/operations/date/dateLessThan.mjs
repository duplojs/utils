import { lessThan } from '../../../../date/operators/lessThan.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function dateLessThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => dateLessThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return lessThan(unwrap(primitive), unwrap(threshold));
}

export { dateLessThan };
