import { informationKind } from './kind.mjs';
import { unwrap } from '../common/unwrap.mjs';

function unwrapSelection(...args) {
    if (args.length === 1) {
        const [selector] = args;
        return (input) => unwrapSelection(input, selector);
    }
    const [input, selector] = args;
    if (!informationKind.has(input)) {
        return input;
    }
    return selector[informationKind.getValue(input)] === true
        ? unwrap(input)
        : input;
}

export { unwrapSelection };
