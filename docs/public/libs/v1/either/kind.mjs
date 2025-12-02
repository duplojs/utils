import { createKindNamespace } from '../common/kind.mjs';

const createEitherKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsEither");
const eitherInformationKind = createEitherKind("information");

export { createEitherKind, eitherInformationKind };
