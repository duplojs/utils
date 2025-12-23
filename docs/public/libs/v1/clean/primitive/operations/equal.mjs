import { unwrap } from '../../../common/unwrap.mjs';

function equal(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (input) => equal(input, value);
    }
    const [input, value] = args;
    return unwrap(input) === unwrap(value);
}

export { equal };
