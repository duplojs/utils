'use strict';

require('../left/create.cjs');
require('../left/error.cjs');
require('../left/fail.cjs');
var is = require('../left/is.cjs');
require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../bool/falsy.cjs');
require('../bool/truthy.cjs');
require('../bool/base.cjs');
var create = require('../future/create.cjs');
require('../future/error.cjs');
require('../future/success.cjs');
require('../future/base.cjs');
require('../nullable/empty.cjs');
require('../nullable/filled.cjs');
require('../nullable/base.cjs');
require('../nullish/empty.cjs');
require('../nullish/filled.cjs');
require('../nullish/base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');
var success = require('./success.cjs');
var is$1 = require('./is.cjs');
require('./create.cjs');
require('./ok.cjs');
require('../kind.cjs');

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
