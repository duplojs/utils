'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
var create = require('../right/create.cjs');

const eitherFutureSuccessKind = kind.createEitherKind("future-success");
function futureSuccess(value) {
    return base.eitherFutureKind.setTo(eitherFutureSuccessKind.setTo(create.right("future", value)));
}

exports.eitherFutureSuccessKind = eitherFutureSuccessKind;
exports.futureSuccess = futureSuccess;
