'use strict';

var kind = require('../common/kind.cjs');

const createCleanKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsClean");

exports.createCleanKind = createCleanKind;
