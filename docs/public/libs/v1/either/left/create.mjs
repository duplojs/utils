import { wrapValue } from '../../common/wrapValue.mjs';
import { createEitherKind, eitherInformationKind } from '../kind.mjs';

const eitherLeftKind = createEitherKind("left");
/**
 * {@include either/left/index.md}
 */
function left(information, value = undefined) {
    return eitherLeftKind.setTo(eitherInformationKind.setTo(wrapValue(value), information));
}

export { eitherLeftKind, left };
