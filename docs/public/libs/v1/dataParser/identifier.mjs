import { coalescing } from '../array/coalescing.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import { error } from '../either/left/error.mjs';
import { success } from '../either/right/success.mjs';

/**
 * Due to the recursive typing of `DataParsers`, it can’t be used without
 * causing an infinity error. You therefore have to go through the parent
 * type `DataParser`, which makes type discrimination impossible. That’s
 * why the `identifier` function was created. The function ensures that,
 * starting from the parent type and the kinds associated with the data
 * parsers, the correct type can be retrieved.
 */
function identifier(...args) {
    if (args.length === 1) {
        const [kind] = args;
        return (input) => identifier(input, kind);
    }
    const [input, kind] = args;
    const formattedKind = coalescing(kind);
    for (const kind of formattedKind) {
        if (!kind.has(input)) {
            return error(input);
        }
    }
    return success(input);
}

export { identifier };
