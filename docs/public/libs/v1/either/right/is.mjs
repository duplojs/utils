import { eitherInformationKind } from '../base.mjs';
import { eitherRightKind } from './create.mjs';
import { isWrappedValue } from '../../common/wrapValue.mjs';

function isRight(input) {
    return eitherRightKind.has(input)
        && eitherInformationKind.has(input)
        && isWrappedValue(input);
}

export { isRight };
