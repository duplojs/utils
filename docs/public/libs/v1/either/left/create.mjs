import { wrapValue } from '../../common/wrapValue.mjs';
import { createEitherKind, informationKind } from '../kind.mjs';

const leftKind = createEitherKind("left");
/**
 * @deprecated use leftKind
 */
const eitherLeftKind = leftKind;
/**
 * {@include either/left/index.md}
 */
function left(information, value = undefined) {
    return leftKind.setTo(informationKind.setTo(wrapValue(value), information));
}

export { eitherLeftKind, left, leftKind };
