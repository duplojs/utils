import { createEitherKind } from '../kind.mjs';
import { left } from './create.mjs';

const eitherErrorKind = createEitherKind("error");
/**
 * {@include either/error/index.md}
 */
function error(value) {
    return eitherErrorKind.setTo(left("error", value));
}

export { eitherErrorKind, error };
