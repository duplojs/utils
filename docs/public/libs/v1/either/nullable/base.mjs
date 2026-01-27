import { createEitherKind } from '../kind.mjs';

const nullableKind = createEitherKind("nullable");
/**
 * @deprecated use nullableKind
 */
const eitherNullableKind = nullableKind;

export { eitherNullableKind, nullableKind };
