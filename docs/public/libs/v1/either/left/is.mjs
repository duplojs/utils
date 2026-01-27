import { leftKind } from './create.mjs';
import { isWrappedValue } from '../../common/wrapValue.mjs';
import { informationKind } from '../kind.mjs';

/**
 * {@include either/isLeft/index.md}
 */
function isLeft(input) {
    return leftKind.has(input)
        && informationKind.has(input)
        && isWrappedValue(input);
}

export { isLeft };
