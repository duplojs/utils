'use strict';

require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
var unwrap = require('../common/unwrap.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
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
require('../common/override.cjs');
var result = require('./result.cjs');

function otherwise(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => otherwise(input, theFunction);
    }
    const [input, theFunction] = args;
    return result.isResult(input)
        ? unwrap.unwrap(input)
        : theFunction(input);
}

exports.otherwise = otherwise;
