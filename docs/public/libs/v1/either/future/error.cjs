'use strict';

var create = require('../left/create.cjs');
var kind = require('../kind.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var base = require('./base.cjs');

const eitherFutureErrorKind = kind.createEitherKind("future-error");
function futureError(value) {
    return base.eitherFutureKind.setTo(eitherFutureErrorKind.setTo(create.left("future", value)));
}

exports.eitherFutureErrorKind = eitherFutureErrorKind;
exports.futureError = futureError;
