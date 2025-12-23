import { unwrap } from '../../../../common/unwrap.mjs';

function lengthEqual(...args) {
    if (args.length === 1) {
        const [length] = args;
        return (primitive) => lengthEqual(primitive, length);
    }
    const [primitive, length] = args;
    return unwrap(primitive).length === unwrap(length);
}

export { lengthEqual };
