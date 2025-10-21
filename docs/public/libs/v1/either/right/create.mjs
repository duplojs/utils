import { createKind } from '../../common/kind.mjs';
import { wrapValue } from '../../common/wrapValue.mjs';
import { eitherInformationKind } from '../base.mjs';

const eitherRightKind = createKind("either-right");
function right(information, value = undefined) {
    return eitherRightKind.addTo(eitherInformationKind.addTo(wrapValue(value), information));
}

export { eitherRightKind, right };
