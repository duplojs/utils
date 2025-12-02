import { success } from './success.mjs';
import { isRight } from './is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

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
