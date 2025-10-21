import { createKind } from '../../common/kind.mjs';
import { left } from '../left/create.mjs';
import { eitherFutureKind } from './base.mjs';

const eitherFutureErrorKind = createKind("either-future-error");
function futureError(value) {
    return eitherFutureKind.addTo(eitherFutureErrorKind.addTo(left("future", value)));
}

export { eitherFutureErrorKind, futureError };
