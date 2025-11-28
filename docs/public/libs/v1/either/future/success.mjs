import { createEitherKind } from '../kind.mjs';
import { eitherFutureKind } from './base.mjs';
import '../left/create.mjs';
import '../left/error.mjs';
import '../left/fail.mjs';
import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
import './error.mjs';
import '../nullable/empty.mjs';
import '../nullable/filled.mjs';
import '../nullable/base.mjs';
import '../nullish/empty.mjs';
import '../nullish/filled.mjs';
import '../nullish/base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import '../../common/override.mjs';
import '../right/success.mjs';
import { right } from '../right/create.mjs';
import '../right/ok.mjs';

const eitherFutureSuccessKind = createEitherKind("future-success");
function futureSuccess(value) {
    return eitherFutureKind.setTo(eitherFutureSuccessKind.setTo(right("future", value)));
}

export { eitherFutureSuccessKind, futureSuccess };
