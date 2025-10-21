import { createKind } from '../../common/kind.mjs';
import { eitherFutureKind } from './base.mjs';
import { right } from '../right/create.mjs';

const eitherFutureSuccessKind = createKind("either-future-success");
function futureSuccess(value) {
    return eitherFutureKind.addTo(eitherFutureSuccessKind.addTo(right("future", value)));
}

export { eitherFutureSuccessKind, futureSuccess };
