import { createEitherKind } from '../kind.mjs';
import { eitherFutureKind } from './base.mjs';
import { right } from '../right/create.mjs';

const eitherFutureSuccessKind = createEitherKind("future-success");
/**
 * {@include either/futureSuccess/index.md}
 */
function futureSuccess(value) {
    return eitherFutureKind.setTo(eitherFutureSuccessKind.setTo(right("future", value)));
}

export { eitherFutureSuccessKind, futureSuccess };
