'use strict';

var kind = require('../../common/kind.cjs');
var base = require('./base.cjs');
var create = require('../right/create.cjs');

const eitherFutureSuccessKind = kind.createKind("either-future-success");
function futureSuccess(value) {
    return base.eitherFutureKind.setTo(eitherFutureSuccessKind.setTo(create.right("future", value)));
}

exports.eitherFutureSuccessKind = eitherFutureSuccessKind;
exports.futureSuccess = futureSuccess;
