import { unwrap } from '../../../common/unwrap.mjs';

function matchWithNumber(...args) {
    if (args.length === 1) {
        const [matcher] = args;
        return (input) => matcher[unwrap(input)](input);
    }
    const [input, matcher] = args;
    return matcher[unwrap(input)](input);
}

export { matchWithNumber };
