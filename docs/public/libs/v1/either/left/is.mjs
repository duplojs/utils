import { eitherLeftKind } from './create.mjs';
import { isWrappedValue } from '../../common/wrapValue.mjs';
import { eitherInformationKind } from '../base.mjs';

function isLeft(input) {
    return eitherLeftKind.has(input)
        && eitherInformationKind.has(input)
        && isWrappedValue(input);
}

export { isLeft };
