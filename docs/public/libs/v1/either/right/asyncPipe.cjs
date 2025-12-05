'use strict';

var success = require('./success.cjs');
var is$1 = require('./is.cjs');
var create = require('../future/create.cjs');
var is = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

function rightAsyncPipe(input, ...pipes) {
    return create.future((async () => {
        const awaitedInput = await input;
        if (is.isLeft(awaitedInput)) {
            return awaitedInput;
        }
        let acc = is$1.isRight(awaitedInput)
            ? unwrap.unwrap(awaitedInput)
            : awaitedInput;
        for (const pipe of pipes) {
            acc = await pipe(is$1.isRight(acc)
                ? unwrap.unwrap(acc)
                : acc);
            if (is.isLeft(acc)) {
                return acc;
            }
        }
        return is$1.isRight(acc)
            ? acc
            : success.success(acc);
    })());
}

exports.rightAsyncPipe = rightAsyncPipe;
