'use strict';

var kind = require('./kind.cjs');

const createErrorKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsError");

exports.createErrorKind = createErrorKind;
