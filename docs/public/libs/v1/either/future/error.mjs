import { eitherFutureKind } from './base.mjs';
import { createEitherKind } from '../kind.mjs';
import { left } from '../left/create.mjs';

const eitherFutureErrorKind = createEitherKind("future-error");
function futureError(value) {
    return eitherFutureKind.setTo(eitherFutureErrorKind.setTo(left("future", value)));
}

export { eitherFutureErrorKind, futureError };
