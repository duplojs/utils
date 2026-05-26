import { unwrap } from '../common/unwrap.mjs';
import { hasInformation } from './hasInformation.mjs';

function unwrapByInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => unwrapByInformation(input, information);
    }
    const [input, information] = args;
    if (hasInformation(input, information)) {
        return unwrap(input);
    }
    return input;
}

export { unwrapByInformation };
