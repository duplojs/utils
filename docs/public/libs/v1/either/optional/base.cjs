'use strict';

var kind = require('../kind.cjs');

const optionalKind = kind.createEitherKind("optional");
/**
 * @deprecated use optionalKind
 */
const eitherOptionalKind = optionalKind;

exports.eitherOptionalKind = eitherOptionalKind;
exports.optionalKind = optionalKind;
