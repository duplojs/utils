import { eitherInformationKind } from './kind.mjs';

function hasInformation(input, information) {
    return eitherInformationKind.has(input)
        && eitherInformationKind.getValue(input) === information;
}

export { hasInformation };
