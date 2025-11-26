'use strict';

var create = require('../left/create.cjs');
require('../left/error.cjs');
require('../left/fail.cjs');
var kind = require('../kind.cjs');
require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../bool/falsy.cjs');
require('../bool/truthy.cjs');
require('../bool/base.cjs');
require('../right/success.cjs');
require('../right/create.cjs');
require('../right/ok.cjs');
require('./success.cjs');
var base = require('./base.cjs');
require('../nullable/empty.cjs');
require('../nullable/filled.cjs');
require('../nullable/base.cjs');
require('../nullish/empty.cjs');
require('../nullish/filled.cjs');
require('../nullish/base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');

const eitherFutureErrorKind = kind.createEitherKind("future-error");
function futureError(value) {
    return base.eitherFutureKind.setTo(eitherFutureErrorKind.setTo(create.left("future", value)));
}

exports.eitherFutureErrorKind = eitherFutureErrorKind;
exports.futureError = futureError;
