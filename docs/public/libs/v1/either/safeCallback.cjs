'use strict';

var kind = require('./kind.cjs');
var create = require('./left/create.cjs');
var create$1 = require('./right/create.cjs');
var is = require('./right/is.cjs');
var is$1 = require('./left/is.cjs');

const callbackErrorKind = kind.createEitherKind("callback-error");
/**
 * @deprecated use callbackErrorKind
 */
const eitherCallbackErrorKind = callbackErrorKind;
const callbackSuccessKind = kind.createEitherKind("callback-success");
/**
 * @deprecated use callbackSuccessKind
 */
const eitherCallbackSuccessKind = callbackSuccessKind;
function callbackError(value) {
    return callbackErrorKind.setTo(create.left("callback", value));
}
function callbackSuccess(value) {
    return callbackSuccessKind.setTo(create$1.right("callback", value));
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
exports.callbackErrorKind = callbackErrorKind;
exports.callbackSuccess = callbackSuccess;
exports.callbackSuccessKind = callbackSuccessKind;
exports.eitherCallbackErrorKind = eitherCallbackErrorKind;
exports.eitherCallbackSuccessKind = eitherCallbackSuccessKind;
exports.safeCallback = safeCallback;
