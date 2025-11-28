'use strict';

require('../left/create.cjs');
require('../left/error.cjs');
require('../left/fail.cjs');
var is$1 = require('../left/is.cjs');
require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../bool/falsy.cjs');
require('../bool/truthy.cjs');
require('../bool/base.cjs');
require('../right/success.cjs');
var is = require('../right/is.cjs');
require('../right/create.cjs');
require('../right/ok.cjs');
var success = require('./success.cjs');
var error = require('./error.cjs');
require('./base.cjs');
require('../nullable/empty.cjs');
require('../nullable/filled.cjs');
require('../nullable/base.cjs');
require('../nullish/empty.cjs');
require('../nullish/filled.cjs');
require('../nullish/base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');
require('../kind.cjs');
require('../../common/override.cjs');

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
