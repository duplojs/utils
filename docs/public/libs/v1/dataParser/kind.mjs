import { createKindNamespace } from '../common/kind.mjs';

const createDataParserKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsDataParser");

export { createDataParserKind };
