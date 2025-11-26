import { createKindNamespace } from './kind.mjs';

const createErrorKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsError");

export { createErrorKind };
