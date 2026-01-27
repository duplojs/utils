import { createEitherKind } from '../kind.mjs';

const boolKind = createEitherKind("bool");
/**
 * @deprecated use boolKind
 */
const eitherBoolKind = boolKind;

export { boolKind, eitherBoolKind };
