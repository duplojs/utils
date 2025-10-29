'use strict';

require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var is$1 = require('../left/is.cjs');
var success = require('./success.cjs');
var error = require('./error.cjs');
var is = require('../right/is.cjs');

const kind = "kind-future-either";
class Future extends Promise {
    constructor(value) {
        super((resolve) => void resolve((value instanceof Promise
            ? value
            : Promise.resolve(value))
            .then((value) => {
            if (is.isRight(value)) {
                return value;
            }
            else if (is$1.isLeft(value)) {
                return value;
            }
            else {
                return success.futureSuccess(value);
            }
        })
            .catch((error$1) => error.futureError(error$1))));
    }
    [kind] = null;
    // @ts-expect-error override signature error
    then(theFunction) {
        return new Future(super.then(theFunction));
    }
    static get [Symbol.species]() {
        return Promise;
    }
    static instanceof(value) {
        return typeof value === "object"
            && value?.constructor?.name === "Future"
            && kind in value;
    }
    static all(values) {
        return new Future(Promise.all(values.map((value) => new Future(value))));
    }
}
function future(value) {
    return new Future(value);
}

exports.Future = Future;
exports.future = future;
