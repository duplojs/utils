import { createKind } from '../../common/kind.mjs';
import { left } from './create.mjs';

const eitherErrorKind = createKind("either-error");
function error(value) {
    return eitherErrorKind.addTo(left("error", value));
}

export { eitherErrorKind, error };
