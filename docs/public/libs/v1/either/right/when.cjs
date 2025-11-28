'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../bool/falsy.cjs');
require('../bool/truthy.cjs');
require('../bool/base.cjs');
require('../left/create.cjs');
require('../left/error.cjs');
require('../left/fail.cjs');
require('../kind.cjs');
require('./success.cjs');
var is = require('./is.cjs');
require('./create.cjs');
require('./ok.cjs');
require('../future/success.cjs');
require('../future/error.cjs');
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
require('../../common/override.cjs');

function whenIsRight(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsRight(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is.isRight(input)) {
        return theFunction(unwrap.unwrap(input));
    }
    return input;
}

exports.whenIsRight = whenIsRight;
