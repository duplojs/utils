'use strict';

var kind = require('../common/kind.cjs');

const nameKindNamespace = "DuplojsUtilsDataParser";
const createDataParserKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
nameKindNamespace);

exports.createDataParserKind = createDataParserKind;
exports.nameKindNamespace = nameKindNamespace;
