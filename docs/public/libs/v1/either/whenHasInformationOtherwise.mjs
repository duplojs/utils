import { informationKind } from './kind.mjs';
import { unwrap } from '../common/unwrap.mjs';

function whenHasInformationOtherwise(...args) {
    if (args.length === 3) {
        const [information, theFunction, otherwiseFunction] = args;
        return (input) => whenHasInformationOtherwise(input, information, theFunction, otherwiseFunction);
    }
    const [input, information, theFunction, otherwiseFunction] = args;
    const formattedInformation = information instanceof Array
        ? information
        : [information];
    if (informationKind.has(input)
        && formattedInformation.includes(informationKind.getValue(input))) {
        return theFunction(unwrap(input));
    }
    return otherwiseFunction(input);
}

export { whenHasInformationOtherwise };
