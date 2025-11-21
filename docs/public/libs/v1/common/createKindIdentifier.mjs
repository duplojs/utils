import './globalStore.mjs';
import './builder.mjs';
import { error } from '../either/left/error.mjs';
import { success } from '../either/right/success.mjs';
import { coalescing } from '../array/coalescing.mjs';

function createKindIdentifier() {
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
    return identifier;
}

export { createKindIdentifier };
