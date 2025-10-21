import { right } from './create.mjs';
import { createKind } from '../../common/kind.mjs';

const eitherSuccessKind = createKind("either-success");
function success(value) {
    return eitherSuccessKind.addTo(right("success", value));
}

export { eitherSuccessKind, success };
