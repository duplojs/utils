import { createEitherKind } from '../kind.mjs';

const optionalKind = createEitherKind("optional");
/**
 * @deprecated use optionalKind
 */
const eitherOptionalKind = optionalKind;

export { eitherOptionalKind, optionalKind };
