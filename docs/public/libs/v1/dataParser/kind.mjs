import { createKindNamespace } from '../common/kind.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';

const createDataParserKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsDataParser");

export { createDataParserKind };
