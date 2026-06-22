import { informationKind } from './kind.mjs';
import { unwrap } from '../common/unwrap.mjs';

function whenIsSelectedOtherwise(...args) {
    if (args.length === 3) {
        const [selector, theFunction, otherwiseFunction] = args;
        return (input) => whenIsSelectedOtherwise(input, selector, theFunction, otherwiseFunction);
    }
    const [input, selector, theFunction, otherwiseFunction] = args;
    if (informationKind.has(input)
        && selector[informationKind.getValue(input)] === true) {
        return theFunction(unwrap(input));
    }
    return otherwiseFunction(input);
}

export { whenIsSelectedOtherwise };
