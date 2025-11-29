'use strict';

require('./stringToBytes.cjs');
require('./stringToMillisecond.cjs');
require('./globalStore.cjs');
require('./builder.cjs');
require('../either/bool/falsy.cjs');
require('../either/bool/truthy.cjs');
require('../either/bool/base.cjs');
require('../either/left/create.cjs');
require('../either/left/error.cjs');
require('../either/left/fail.cjs');
require('../either/kind.cjs');
require('../either/right/success.cjs');
require('../either/right/create.cjs');
require('../either/right/ok.cjs');
require('../either/future/success.cjs');
require('../either/future/error.cjs');
require('../either/future/base.cjs');
require('../either/nullable/empty.cjs');
require('../either/nullable/filled.cjs');
require('../either/nullable/base.cjs');
require('../either/nullish/empty.cjs');
require('../either/nullish/filled.cjs');
require('../either/nullish/base.cjs');
require('../either/optional/empty.cjs');
require('../either/optional/filled.cjs');
require('../either/optional/base.cjs');
require('./override.cjs');
var coalescing = require('../array/coalescing.cjs');

function instanceOf(...args) {
    if (args.length === 1) {
        const [constructor] = args;
        return (input) => instanceOf(input, constructor);
    }
    const [input, constructor] = args;
    const formattedConstructor = coalescing.coalescing(constructor);
    for (const constructor of formattedConstructor) {
        if (input instanceof constructor) {
            return true;
        }
    }
    return false;
}

exports.instanceOf = instanceOf;
