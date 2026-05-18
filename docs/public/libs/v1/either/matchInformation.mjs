import { informationKind } from './kind.mjs';
import { unwrap } from '../common/unwrap.mjs';

function matchInformation(...args) {
    if (args.length === 1) {
        const [matcher] = args;
        return (input) => matchInformation(input, matcher);
    }
    const [input, matcher] = args;
    if (!informationKind.has(input)) {
        return input;
    }
    return matcher[informationKind.getValue(input)](unwrap(input));
}

export { matchInformation };
