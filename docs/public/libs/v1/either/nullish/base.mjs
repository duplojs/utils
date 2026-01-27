import { createEitherKind } from '../kind.mjs';

const nullishKind = createEitherKind("nullish");
/**
 * @deprecated use nullishKind
 */
const eitherNullishKind = nullishKind;

export { eitherNullishKind, nullishKind };
