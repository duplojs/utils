'use strict';

function detachObjectMethod(inputObject, method) {
    return inputObject[method].bind(inputObject);
}

exports.detachObjectMethod = detachObjectMethod;
