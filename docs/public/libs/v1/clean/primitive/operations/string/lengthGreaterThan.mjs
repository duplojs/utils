import { unwrap } from '../../../../common/unwrap.mjs';

function lengthGreaterThan(...args) {
    if (args.length === 1) {
        const [length] = args;
        return (primitive) => lengthGreaterThan(primitive, length);
    }
    const [primitive, length] = args;
    return unwrap(primitive).length > unwrap(length);
}

export { lengthGreaterThan };
