import { unwrap } from '../../../../common/unwrap.mjs';

function greaterThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => greaterThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return unwrap(primitive) > unwrap(threshold);
}

export { greaterThan };
