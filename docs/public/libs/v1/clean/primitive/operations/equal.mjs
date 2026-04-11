import { unwrap } from '../../../common/unwrap.mjs';

function equal(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (input) => equal(input, value);
    }
    const [input, value] = args;
    if (input === null || value === null) {
        return input === value;
    }
    return unwrap(input).toString() === unwrap(value).toString();
}

export { equal };
