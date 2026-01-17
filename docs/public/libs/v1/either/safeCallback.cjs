'use strict';

var kind = require('./kind.cjs');
var create = require('./left/create.cjs');
var create$1 = require('./right/create.cjs');
var is = require('./right/is.cjs');
var is$1 = require('./left/is.cjs');

const eitherCallbackErrorKind = kind.createEitherKind("callback-error");
const eitherCallbackSuccessKind = kind.createEitherKind("callback-success");
function callbackError(value) {
    return eitherCallbackErrorKind.setTo(create.left("callback", value));
}
function callbackSuccess(value) {
    return eitherCallbackSuccessKind.setTo(create$1.right("callback", value));
}
/**
 * {@include either/safeCallback/index.md}
 */
function safeCallback(theFunction) {
    try {
        const result = theFunction();
        if (is.isRight(result) || is$1.isLeft(result)) {
            return result;
        }
        return callbackSuccess(result);
    }
    catch (error) {
        return callbackError(error);
    }
}

exports.callbackError = callbackError;
exports.callbackSuccess = callbackSuccess;
exports.eitherCallbackErrorKind = eitherCallbackErrorKind;
exports.eitherCallbackSuccessKind = eitherCallbackSuccessKind;
exports.safeCallback = safeCallback;
