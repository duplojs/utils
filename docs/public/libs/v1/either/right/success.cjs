'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const eitherSuccessKind = kind.createEitherKind("success");
/**
 * {@include either/success/index.md}
 */
function success(value) {
    return eitherSuccessKind.setTo(create.right("success", value));
}

exports.eitherSuccessKind = eitherSuccessKind;
exports.success = success;
