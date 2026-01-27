'use strict';

var kind = require('../kind.cjs');

const boolKind = kind.createEitherKind("bool");
/**
 * @deprecated use boolKind
 */
const eitherBoolKind = boolKind;

exports.boolKind = boolKind;
exports.eitherBoolKind = eitherBoolKind;
