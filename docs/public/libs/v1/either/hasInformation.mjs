import { informationKind } from './kind.mjs';
import { coalescing } from '../array/coalescing.mjs';

function hasInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => hasInformation(input, information);
    }
    const [input, information] = args;
    const formattedInformation = coalescing(information);
    return informationKind.has(input)
        && formattedInformation.includes(informationKind.getValue(input));
}

export { hasInformation };
