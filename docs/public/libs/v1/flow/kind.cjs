'use strict';

var kind = require('../common/kind.cjs');

const createFlowKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsFlow");

exports.createFlowKind = createFlowKind;
