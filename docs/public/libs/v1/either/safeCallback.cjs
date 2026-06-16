'use strict';

var create = require('./left/create.cjs');
var is = require('./right/is.cjs');
var is$1 = require('./left/is.cjs');
var create$1 = require('./right/create.cjs');

/**
 * {@include either/safeCallback/index.md}
 */
function safeCallback(theFunction) {
    let result = undefined;
    try {
        result = theFunction();
    }
    catch (error) {
        return create.left("safe-callback-error", error);
    }
    if (result instanceof Promise) {
        return result
            .then((result) => {
            if (is.isRight(result) || is$1.isLeft(result)) {
                return result;
            }
            return create$1.right("safe-callback-success", result);
        })
            .catch((error) => create.left("safe-callback-error", error));
    }
    if (is.isRight(result) || is$1.isLeft(result)) {
        return result;
    }
    return create$1.right("safe-callback-success", result);
}

exports.safeCallback = safeCallback;
