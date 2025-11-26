import './stringToBytes.mjs';
import './stringToMillisecond.mjs';
import './globalStore.mjs';
import './builder.mjs';
import '../either/bool/falsy.mjs';
import '../either/bool/truthy.mjs';
import '../either/bool/base.mjs';
import '../either/left/create.mjs';
import '../either/left/error.mjs';
import '../either/left/fail.mjs';
import '../either/kind.mjs';
import '../either/right/success.mjs';
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
import { coalescing } from '../array/coalescing.mjs';

function instanceOf(...args) {
    if (args.length === 1) {
        const [constructor] = args;
        return (input) => instanceOf(input, constructor);
    }
    const [input, constructor] = args;
    const formattedConstructor = coalescing(constructor);
    for (const constructor of formattedConstructor) {
        if (input instanceof constructor) {
            return true;
        }
    }
    return false;
}

export { instanceOf };
