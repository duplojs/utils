'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
var create = require('../right/create.cjs');

const futureSuccessKind = kind.createEitherKind("future-success");
/**
 * @deprecated use futureSuccessKind
 */
const eitherFutureSuccessKind = futureSuccessKind;
/**
 * {@include either/futureSuccess/index.md}
 */
function futureSuccess(value) {
    return base.futureKind.setTo(futureSuccessKind.setTo(create.right("future", value)));
}

exports.eitherFutureSuccessKind = eitherFutureSuccessKind;
exports.futureSuccess = futureSuccess;
exports.futureSuccessKind = futureSuccessKind;
