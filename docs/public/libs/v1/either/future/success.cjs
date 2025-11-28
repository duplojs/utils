'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
require('../left/create.cjs');
require('../left/error.cjs');
require('../left/fail.cjs');
require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../bool/falsy.cjs');
require('../bool/truthy.cjs');
require('../bool/base.cjs');
require('./error.cjs');
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
require('../right/success.cjs');
var create = require('../right/create.cjs');
require('../right/ok.cjs');

const eitherFutureSuccessKind = kind.createEitherKind("future-success");
function futureSuccess(value) {
    return base.eitherFutureKind.setTo(eitherFutureSuccessKind.setTo(create.right("future", value)));
}

exports.eitherFutureSuccessKind = eitherFutureSuccessKind;
exports.futureSuccess = futureSuccess;
