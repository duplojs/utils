import { left } from './left/create.mjs';
import { isRight } from './right/is.mjs';
import { isLeft } from './left/is.mjs';
import { right } from './right/create.mjs';

/**
 * {@include either/asyncSafeCallback/index.md}
 */
async function asyncSafeCallback(maybeFunction) {
    let result = undefined;
    try {
        result = await (typeof maybeFunction === "function"
            ? maybeFunction()
            : maybeFunction);
    }
    catch (error) {
        return left("safe-callback-error", error);
    }
    if (isRight(result) || isLeft(result)) {
        return result;
    }
    return right("safe-callback-success", result);
}

export { asyncSafeCallback };
