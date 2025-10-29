import { createEitherKind } from '../kind.mjs';
import { left } from './create.mjs';

const eitherErrorKind = createEitherKind("error");
function error(value) {
    return eitherErrorKind.setTo(left("error", value));
}

export { eitherErrorKind, error };
