'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const successKind = kind.createEitherKind("success");
/**
 * @deprecated use successKind
 */
const eitherSuccessKind = successKind;
/**
 * {@include either/success/index.md}
 */
function success(value) {
    return successKind.setTo(create.right("success", value));
}

exports.eitherSuccessKind = eitherSuccessKind;
exports.success = success;
exports.successKind = successKind;
