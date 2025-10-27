import { createKind } from '../../common/kind.mjs';
import { wrapValue } from '../../common/wrapValue.mjs';
import { eitherInformationKind } from '../base.mjs';

const eitherLeftKind = createKind("either-left");
function left(information, value = undefined) {
    return eitherLeftKind.setTo(eitherInformationKind.setTo(wrapValue(value), information));
}

export { eitherLeftKind, left };
