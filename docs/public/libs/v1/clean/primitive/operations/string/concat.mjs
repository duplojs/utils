import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function concat(...args) {
    if (args.length === 1) {
        const [text] = args;
        return (input) => concat(input, text);
    }
    const [input, ...textsRest] = args;
    return wrapValue(unwrap(input)
        .concat(...textsRest.map(unwrap)));
}

export { concat };
