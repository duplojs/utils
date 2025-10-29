import './globalStore.mjs';
import './builder.mjs';
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
