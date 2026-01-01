'use strict';

var kind = require('./kind.cjs');
var create = require('./left/create.cjs');

const eitherCallbackErrorKind = kind.createEitherKind("callback-error");
function callbackError(value) {
    return eitherCallbackErrorKind.setTo(create.left("callback", value));
}
function safeCallback(theFunction) {
    try {
        return theFunction();
    }
    catch (error) {
        return callbackError(error);
    }
}

exports.callbackError = callbackError;
exports.eitherCallbackErrorKind = eitherCallbackErrorKind;
exports.safeCallback = safeCallback;
