import { createKindNamespace } from '../common/kind.mjs';

const createEitherKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsEither");
const informationKind = createEitherKind("information");
/**
 * @deprecated use informationKind
 */
const eitherInformationKind = informationKind;

export { createEitherKind, eitherInformationKind, informationKind };
