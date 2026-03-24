import { createKindNamespace } from '../common/kind.mjs';

const createFlowKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsFlow");

export { createFlowKind };
