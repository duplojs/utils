'use strict';

var base = require('./base.cjs');
var kind = require('../kind.cjs');
var create = require('../left/create.cjs');

const futureErrorKind = kind.createEitherKind("future-error");
/**
 * @deprecated use futureErrorKind
 */
const eitherFutureErrorKind = futureErrorKind;
/**
 * {@include either/futureError/index.md}
 */
function futureError(value) {
    return base.futureKind.setTo(futureErrorKind.setTo(create.left("future", value)));
}

exports.eitherFutureErrorKind = eitherFutureErrorKind;
exports.futureError = futureError;
exports.futureErrorKind = futureErrorKind;
