'use strict';

require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
var unwrap = require('../common/unwrap.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
require('./bool/falsy.cjs');
require('./bool/truthy.cjs');
require('./bool/base.cjs');
require('./left/create.cjs');
require('./left/error.cjs');
require('./left/fail.cjs');
var is = require('./left/is.cjs');
require('./right/success.cjs');
var is$1 = require('./right/is.cjs');
require('./right/create.cjs');
require('./right/ok.cjs');
require('./future/success.cjs');
require('./future/error.cjs');
require('./future/base.cjs');
require('./nullable/empty.cjs');
require('./nullable/filled.cjs');
require('./nullable/base.cjs');
require('./nullish/empty.cjs');
require('./nullish/filled.cjs');
require('./nullish/base.cjs');
require('./optional/empty.cjs');
require('./optional/filled.cjs');
require('./optional/base.cjs');
var kind = require('./kind.cjs');
require('../common/override.cjs');

function whenHasInformation(...args) {
    if (args.length === 2) {
        const [information, theFunction] = args;
        return (input) => whenHasInformation(input, information, theFunction);
    }
    const [input, information, theFunction] = args;
    const formattedInformation = information instanceof Array
        ? information
        : [information];
    if ((is.isLeft(input)
        || is$1.isRight(input)) && formattedInformation.includes(kind.eitherInformationKind.getValue(input))) {
        return theFunction(unwrap.unwrap(input));
    }
    return input;
}

exports.whenHasInformation = whenHasInformation;
