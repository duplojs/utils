import { unwrap } from '../../common/unwrap.mjs';
import { isRight } from './is.mjs';

/**
 * {@include either/unwrapRight/index.md}
 */
function unwrapRight(input) {
    if (isRight(input)) {
        return unwrap(input);
    }
    return input;
}

export { unwrapRight };
