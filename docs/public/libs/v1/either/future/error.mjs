import { futureKind } from './base.mjs';
import { createEitherKind } from '../kind.mjs';
import { left } from '../left/create.mjs';

const futureErrorKind = createEitherKind("future-error");
/**
 * @deprecated use futureErrorKind
 */
const eitherFutureErrorKind = futureErrorKind;
/**
 * {@include either/futureError/index.md}
 */
function futureError(value) {
    return futureKind.setTo(futureErrorKind.setTo(left("future", value)));
}

export { eitherFutureErrorKind, futureError, futureErrorKind };
