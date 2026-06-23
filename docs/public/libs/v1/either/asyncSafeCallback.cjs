'use strict';

var create = require('./left/create.cjs');
var is = require('./right/is.cjs');
var is$1 = require('./left/is.cjs');
var create$1 = require('./right/create.cjs');

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
        return create.left("safe-callback-error", error);
    }
    if (is.isRight(result) || is$1.isLeft(result)) {
        return result;
    }
    return create$1.right("safe-callback-success", result);
}

exports.asyncSafeCallback = asyncSafeCallback;
