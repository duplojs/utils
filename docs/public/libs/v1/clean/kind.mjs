import { createKindNamespace } from '../common/kind.mjs';

const createCleanKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsClean");

export { createCleanKind };
