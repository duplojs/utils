'use strict';

var kind = require('../kind.cjs');

const nullishKind = kind.createEitherKind("nullish");
/**
 * @deprecated use nullishKind
 */
const eitherNullishKind = nullishKind;

exports.eitherNullishKind = eitherNullishKind;
exports.nullishKind = nullishKind;
