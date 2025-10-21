import { equal } from '../common/equal.mjs';
import { getDeepProperty } from './getDeepProperty.mjs';

function deepDiscriminate(...args) {
    if (args.length === 2) {
        const [path, value] = args;
        return (input) => deepDiscriminate(input, path, value);
    }
    const [input, path, value] = args;
    return equal(getDeepProperty(input, path), value);
}

export { deepDiscriminate };
