import { equal } from '../common/equal.mjs';

function discriminate(...args) {
    if (args.length === 2) {
        const [key, value] = args;
        return (input) => discriminate(input, key, value);
    }
    const [input, key, value] = args;
    return equal(input[key], value);
}

export { discriminate };
