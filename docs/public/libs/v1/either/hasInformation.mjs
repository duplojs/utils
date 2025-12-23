import { eitherInformationKind } from './kind.mjs';

function hasInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => hasInformation(input, information);
    }
    const [input, information] = args;
    return eitherInformationKind.has(input)
        && eitherInformationKind.getValue(input) === information;
}

export { hasInformation };
