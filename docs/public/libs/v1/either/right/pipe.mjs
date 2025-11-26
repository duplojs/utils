import '../left/create.mjs';
import '../left/error.mjs';
import '../left/fail.mjs';
import { isLeft } from '../left/is.mjs';
import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
import { success } from './success.mjs';
import { isRight } from './is.mjs';
import './create.mjs';
import './ok.mjs';
import '../future/success.mjs';
import '../future/error.mjs';
import '../future/base.mjs';
import '../nullable/empty.mjs';
import '../nullable/filled.mjs';
import '../nullable/base.mjs';
import '../nullish/empty.mjs';
import '../nullish/filled.mjs';
import '../nullish/base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import '../kind.mjs';

/* eslint-disable @typescript-eslint/max-params */
function rightPipe(input, ...pipes) {
    if (isLeft(input)) {
        return input;
    }
    let acc = isRight(input)
        ? unwrap(input)
        : input;
    for (const pipe of pipes) {
        acc = pipe(isRight(acc)
            ? unwrap(acc)
            : acc);
        if (isLeft(acc)) {
            return acc;
        }
    }
    return isRight(acc)
        ? acc
        : success(acc);
}

export { rightPipe };
