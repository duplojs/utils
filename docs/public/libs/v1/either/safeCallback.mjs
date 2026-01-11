import { createEitherKind } from './kind.mjs';
import { left } from './left/create.mjs';

const eitherCallbackErrorKind = createEitherKind("callback-error");
/**
 * {@include either/safeCallback/index.md}
 */
function callbackError(value) {
    return eitherCallbackErrorKind.setTo(left("callback", value));
}
function safeCallback(theFunction) {
    try {
        return theFunction();
    }
    catch (error) {
        return callbackError(error);
    }
}

export { callbackError, eitherCallbackErrorKind, safeCallback };
