import { createEitherKind } from '../kind.mjs';
import { eitherFutureKind } from './base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { right } from '../right/create.mjs';

const eitherFutureSuccessKind = createEitherKind("future-success");
function futureSuccess(value) {
    return eitherFutureKind.setTo(eitherFutureSuccessKind.setTo(right("future", value)));
}

export { eitherFutureSuccessKind, futureSuccess };
