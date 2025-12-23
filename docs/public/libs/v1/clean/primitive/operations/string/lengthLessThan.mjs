import { unwrap } from '../../../../common/unwrap.mjs';

function lengthLessThan(...args) {
    if (args.length === 1) {
        const [length] = args;
        return (primitive) => lengthLessThan(primitive, length);
    }
    const [primitive, length] = args;
    return unwrap(primitive).length < unwrap(length);
}

export { lengthLessThan };
