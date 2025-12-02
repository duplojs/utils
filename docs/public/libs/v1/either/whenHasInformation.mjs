import { eitherInformationKind } from './kind.mjs';
import { isLeft } from './left/is.mjs';
import { isRight } from './right/is.mjs';
import { unwrap } from '../common/unwrap.mjs';

function whenHasInformation(...args) {
    if (args.length === 2) {
        const [information, theFunction] = args;
        return (input) => whenHasInformation(input, information, theFunction);
    }
    const [input, information, theFunction] = args;
    const formattedInformation = information instanceof Array
        ? information
        : [information];
    if ((isLeft(input)
        || isRight(input)) && formattedInformation.includes(eitherInformationKind.getValue(input))) {
        return theFunction(unwrap(input));
    }
    return input;
}

export { whenHasInformation };
