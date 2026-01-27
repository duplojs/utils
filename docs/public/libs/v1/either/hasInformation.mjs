import { informationKind } from './kind.mjs';

function hasInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => hasInformation(input, information);
    }
    const [input, information] = args;
    return informationKind.has(input)
        && informationKind.getValue(input) === information;
}

export { hasInformation };
