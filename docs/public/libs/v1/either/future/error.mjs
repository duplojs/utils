import { left } from '../left/create.mjs';
import '../left/error.mjs';
import '../left/fail.mjs';
import { createEitherKind } from '../kind.mjs';
import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
import '../right/success.mjs';
import '../right/create.mjs';
import '../right/ok.mjs';
import './success.mjs';
import { eitherFutureKind } from './base.mjs';
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

const eitherFutureErrorKind = createEitherKind("future-error");
function futureError(value) {
    return eitherFutureKind.setTo(eitherFutureErrorKind.setTo(left("future", value)));
}

export { eitherFutureErrorKind, futureError };
