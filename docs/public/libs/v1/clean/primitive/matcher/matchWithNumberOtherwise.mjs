import { unwrap } from '../../../common/unwrap.mjs';

function execute(input, matcher, otherwise) {
    const callback = matcher[unwrap(input)];
    return callback === undefined ? otherwise(input) : callback(input);
}
function matchWithNumberOtherwise(...args) {
    if (args.length === 2) {
        const [matcher, otherwise] = args;
        return (input) => execute(input, matcher, otherwise);
    }
    const [input, matcher, otherwise] = args;
    return execute(input, matcher, otherwise);
}

export { matchWithNumberOtherwise };
