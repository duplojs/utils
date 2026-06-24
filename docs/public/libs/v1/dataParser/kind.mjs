import { createKindNamespace } from '../common/kind.mjs';

const nameKindNamespace = "DuplojsUtilsDataParser";
const createDataParserKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
nameKindNamespace);

export { createDataParserKind, nameKindNamespace };
