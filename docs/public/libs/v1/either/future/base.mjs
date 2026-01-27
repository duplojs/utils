import { createEitherKind } from '../kind.mjs';

const futureKind = createEitherKind("future");
/**
 * @deprecated use futureKind
 */
const eitherFutureKind = futureKind;

export { eitherFutureKind, futureKind };
