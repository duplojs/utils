'use strict';

var kind = require('../kind.cjs');

const futureKind = kind.createEitherKind("future");
/**
 * @deprecated use futureKind
 */
const eitherFutureKind = futureKind;

exports.eitherFutureKind = eitherFutureKind;
exports.futureKind = futureKind;
