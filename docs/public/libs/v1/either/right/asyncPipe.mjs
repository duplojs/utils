import { success } from './success.mjs';
import { isRight } from './is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

async function rightAsyncPipe(input, ...pipes) {
    const awaitedInput = await input;
    if (isLeft(awaitedInput)) {
        return awaitedInput;
    }
    let acc = isRight(awaitedInput)
        ? unwrap(awaitedInput)
        : awaitedInput;
    for (const pipe of pipes) {
        acc = await pipe(isRight(acc)
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

export { rightAsyncPipe };
