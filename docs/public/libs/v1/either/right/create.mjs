import { wrapValue } from '../../common/wrapValue.mjs';
import { createEitherKind, eitherInformationKind } from '../kind.mjs';

const eitherRightKind = createEitherKind("right");
function right(information, value = undefined) {
    return eitherRightKind.setTo(eitherInformationKind.setTo(wrapValue(value), information));
}

export { eitherRightKind, right };
