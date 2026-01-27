import { wrapValue } from '../../common/wrapValue.mjs';
import { createEitherKind, informationKind } from '../kind.mjs';

const rightKind = createEitherKind("right");
/**
 * @deprecated use rightKind
 */
const eitherRightKind = rightKind;
/**
 * {@include either/right/index.md}
 */
function right(information, value = undefined) {
    return rightKind.setTo(informationKind.setTo(wrapValue(value), information));
}

export { eitherRightKind, right, rightKind };
