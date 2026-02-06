import { createKindNamespace } from '../common/kind.mjs';

const createDateKind = createKindNamespace(
// @ts-expect-error - reserved kind namespace
"DuplojsUtilsDate");

export { createDateKind };
