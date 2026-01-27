'use strict';

var kind = require('../kind.cjs');

const nullableKind = kind.createEitherKind("nullable");
/**
 * @deprecated use nullableKind
 */
const eitherNullableKind = nullableKind;

exports.eitherNullableKind = eitherNullableKind;
exports.nullableKind = nullableKind;
