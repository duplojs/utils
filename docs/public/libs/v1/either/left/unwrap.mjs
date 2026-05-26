import { unwrap } from '../../common/unwrap.mjs';
import { isLeft } from './is.mjs';

/**
 * {@include either/unwrapLeft/index.md}
 */
function unwrapLeft(input) {
    if (isLeft(input)) {
        return unwrap(input);
    }
    return input;
}

export { unwrapLeft };
