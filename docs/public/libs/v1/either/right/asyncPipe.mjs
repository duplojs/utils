import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { isLeft } from '../left/is.mjs';
import { future } from '../future/create.mjs';
import { success } from './success.mjs';
import { isRight } from './is.mjs';

function rightAsyncPipe(input, ...pipes) {
    return future((async () => {
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
    })());
}

export { rightAsyncPipe };
