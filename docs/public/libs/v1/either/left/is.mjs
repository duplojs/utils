import { eitherLeftKind } from './create.mjs';
import { isWrappedValue } from '../../common/wrapValue.mjs';
import { eitherInformationKind } from '../kind.mjs';

/**
 * {@include either/isLeft/index.md}
 */
function isLeft(input) {
    return eitherLeftKind.has(input)
        && eitherInformationKind.has(input)
        && isWrappedValue(input);
}

export { isLeft };
