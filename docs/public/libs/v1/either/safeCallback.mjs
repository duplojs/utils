import { createEitherKind } from './kind.mjs';
import { left } from './left/create.mjs';
import { right } from './right/create.mjs';
import { isRight } from './right/is.mjs';
import { isLeft } from './left/is.mjs';

const callbackErrorKind = createEitherKind("callback-error");
/**
 * @deprecated use callbackErrorKind
 */
const eitherCallbackErrorKind = callbackErrorKind;
const callbackSuccessKind = createEitherKind("callback-success");
/**
 * @deprecated use callbackSuccessKind
 */
const eitherCallbackSuccessKind = callbackSuccessKind;
function callbackError(value) {
    return callbackErrorKind.setTo(left("callback", value));
}
function callbackSuccess(value) {
    return callbackSuccessKind.setTo(right("callback", value));
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

export { callbackError, callbackErrorKind, callbackSuccess, callbackSuccessKind, eitherCallbackErrorKind, eitherCallbackSuccessKind, safeCallback };
