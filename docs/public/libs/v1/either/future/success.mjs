import { createEitherKind } from '../kind.mjs';
import { futureKind } from './base.mjs';
import { right } from '../right/create.mjs';

const futureSuccessKind = createEitherKind("future-success");
/**
 * @deprecated use futureSuccessKind
 */
const eitherFutureSuccessKind = futureSuccessKind;
/**
 * {@include either/futureSuccess/index.md}
 */
function futureSuccess(value) {
    return futureKind.setTo(futureSuccessKind.setTo(right("future", value)));
}

export { eitherFutureSuccessKind, futureSuccess, futureSuccessKind };
