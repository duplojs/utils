import { createKindNamespace } from '../common/kind.mjs';

/**
 * {@include clean/createCleanKind/index.md}
 */
const createCleanKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsClean");

export { createCleanKind };
