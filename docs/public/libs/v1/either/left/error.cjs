'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const eitherErrorKind = kind.createEitherKind("error");
/**
 * {@include either/error/index.md}
 */
function error(value) {
    return eitherErrorKind.setTo(create.left("error", value));
}

exports.eitherErrorKind = eitherErrorKind;
exports.error = error;
