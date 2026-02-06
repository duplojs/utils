'use strict';

var kind = require('../common/kind.cjs');

const createDateKind = kind.createKindNamespace(
// @ts-expect-error - reserved kind namespace
"DuplojsUtilsDate");

exports.createDateKind = createDateKind;
