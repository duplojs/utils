import { eitherInformationKind } from '../kind.mjs';
import { eitherRightKind } from './create.mjs';
import { isWrappedValue } from '../../common/wrapValue.mjs';

/**
 * {@include either/isRight/index.md}
 */
function isRight(input) {
    return eitherRightKind.has(input)
        && eitherInformationKind.has(input)
        && isWrappedValue(input);
}

export { isRight };
