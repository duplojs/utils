'use strict';

var base = require('./base.cjs');
var kind = require('../kind.cjs');
var create = require('../left/create.cjs');

const eitherFutureErrorKind = kind.createEitherKind("future-error");
/**
 * {@include either/futureError/index.md}
 */
function futureError(value) {
    return base.eitherFutureKind.setTo(eitherFutureErrorKind.setTo(create.left("future", value)));
}

exports.eitherFutureErrorKind = eitherFutureErrorKind;
exports.futureError = futureError;
