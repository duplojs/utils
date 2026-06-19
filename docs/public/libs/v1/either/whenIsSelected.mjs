import { informationKind } from './kind.mjs';
import { unwrap } from '../common/unwrap.mjs';

function whenIsSelected(...args) {
    if (args.length === 2) {
        const [selector, theFunction] = args;
        return (input) => whenIsSelected(input, selector, theFunction);
    }
    const [input, selector, theFunction] = args;
    if (informationKind.has(input)
        && selector[informationKind.getValue(input)] === true) {
        return theFunction(unwrap(input));
    }
    return input;
}

export { whenIsSelected };
