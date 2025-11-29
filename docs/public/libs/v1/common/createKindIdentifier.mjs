import './stringToBytes.mjs';
import './stringToMillisecond.mjs';
import './globalStore.mjs';
import './builder.mjs';
import '../either/bool/falsy.mjs';
import '../either/bool/truthy.mjs';
import '../either/bool/base.mjs';
import '../either/left/create.mjs';
import { error } from '../either/left/error.mjs';
import '../either/left/fail.mjs';
import '../either/kind.mjs';
import { success } from '../either/right/success.mjs';
import '../either/right/create.mjs';
import '../either/right/ok.mjs';
import '../either/future/success.mjs';
import '../either/future/error.mjs';
import '../either/future/base.mjs';
import '../either/nullable/empty.mjs';
import '../either/nullable/filled.mjs';
import '../either/nullable/base.mjs';
import '../either/nullish/empty.mjs';
import '../either/nullish/filled.mjs';
import '../either/nullish/base.mjs';
import '../either/optional/empty.mjs';
import '../either/optional/filled.mjs';
import '../either/optional/base.mjs';
import './override.mjs';
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
