'use strict';

var kind = require('../../common/kind.cjs');
var create = require('../left/create.cjs');
var base = require('./base.cjs');

const eitherFutureErrorKind = kind.createKind("either-future-error");
function futureError(value) {
    return base.eitherFutureKind.setTo(eitherFutureErrorKind.setTo(create.left("future", value)));
}

exports.eitherFutureErrorKind = eitherFutureErrorKind;
exports.futureError = futureError;
