import { toTimestamp } from '../toTimestamp.mjs';

function equal(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (first) => equal(first, second);
    }
    const [first, second] = args;
    return toTimestamp(first) === toTimestamp(second);
}

export { equal };
