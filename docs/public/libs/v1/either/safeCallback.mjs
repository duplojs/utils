import { left } from './left/create.mjs';
import { isRight } from './right/is.mjs';
import { isLeft } from './left/is.mjs';
import { right } from './right/create.mjs';

/**
 * {@include either/safeCallback/index.md}
 */
function safeCallback(theFunction) {
    let result = undefined;
    try {
        result = theFunction();
    }
    catch (error) {
        return left("safe-callback-error", error);
    }
    if (result instanceof Promise) {
        return result
            .then((result) => {
            if (isRight(result) || isLeft(result)) {
                return result;
            }
            return right("safe-callback-success", result);
        })
            .catch((error) => left("safe-callback-error", error));
    }
    if (isRight(result) || isLeft(result)) {
        return result;
    }
    return right("safe-callback-success", result);
}

export { safeCallback };
