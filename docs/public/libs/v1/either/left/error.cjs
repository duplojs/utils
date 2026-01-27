'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const errorKind = kind.createEitherKind("error");
/**
 * @deprecated use errorKind
 */
const eitherErrorKind = errorKind;
/**
 * {@include either/error/index.md}
 */
function error(value) {
    return errorKind.setTo(create.left("error", value));
}

exports.eitherErrorKind = eitherErrorKind;
exports.error = error;
exports.errorKind = errorKind;
