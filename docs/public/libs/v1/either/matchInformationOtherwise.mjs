import { informationKind } from './kind.mjs';
import { unwrap } from '../common/unwrap.mjs';

function matchInformationOtherwise(...args) {
    if (args.length === 2) {
        const [matcher, otherwise] = args;
        return (input) => matchInformationOtherwise(input, matcher, otherwise);
    }
    const [input, matcher, otherwise] = args;
    if (!informationKind.has(input)) {
        return otherwise(input);
    }
    const callback = matcher[informationKind.getValue(input)];
    if (callback === undefined) {
        return otherwise(input);
    }
    return callback(unwrap(input));
}

export { matchInformationOtherwise };
