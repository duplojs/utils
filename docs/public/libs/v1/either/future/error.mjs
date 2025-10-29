import { left } from '../left/create.mjs';
import { createEitherKind } from '../kind.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { eitherFutureKind } from './base.mjs';

const eitherFutureErrorKind = createEitherKind("future-error");
function futureError(value) {
    return eitherFutureKind.setTo(eitherFutureErrorKind.setTo(left("future", value)));
}

export { eitherFutureErrorKind, futureError };
