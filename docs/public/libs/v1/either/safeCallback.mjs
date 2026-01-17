import { createEitherKind } from './kind.mjs';
import { left } from './left/create.mjs';
import { right } from './right/create.mjs';
import { isRight } from './right/is.mjs';
import { isLeft } from './left/is.mjs';

const eitherCallbackErrorKind = createEitherKind("callback-error");
const eitherCallbackSuccessKind = createEitherKind("callback-success");
function callbackError(value) {
    return eitherCallbackErrorKind.setTo(left("callback", value));
}
function callbackSuccess(value) {
    return eitherCallbackSuccessKind.setTo(right("callback", value));
}
/**
 * {@include either/safeCallback/index.md}
 */
function safeCallback(theFunction) {
    try {
        const result = theFunction();
        if (isRight(result) || isLeft(result)) {
            return result;
        }
        return callbackSuccess(result);
    }
    catch (error) {
        return callbackError(error);
    }
}

export { callbackError, callbackSuccess, eitherCallbackErrorKind, eitherCallbackSuccessKind, safeCallback };
