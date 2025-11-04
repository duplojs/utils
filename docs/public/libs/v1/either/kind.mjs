import { createKindNamespace } from '../common/kind.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';

const createEitherKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsEither");
const eitherInformationKind = createEitherKind("information");

export { createEitherKind, eitherInformationKind };
