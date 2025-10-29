'use strict';

var kind = require('../common/kind.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');

const createDataParserKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsDataParser");

exports.createDataParserKind = createDataParserKind;
