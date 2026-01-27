import { informationKind } from '../kind.mjs';
import { rightKind } from './create.mjs';
import { isWrappedValue } from '../../common/wrapValue.mjs';

/**
 * {@include either/isRight/index.md}
 */
function isRight(input) {
    return rightKind.has(input)
        && informationKind.has(input)
        && isWrappedValue(input);
}

export { isRight };
