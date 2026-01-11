'use strict';

var kind = require('../common/kind.cjs');

/**
 * {@include clean/createCleanKind/index.md}
 */
const createCleanKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsClean");

exports.createCleanKind = createCleanKind;
