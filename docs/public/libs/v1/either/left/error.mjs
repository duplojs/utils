import { createEitherKind } from '../kind.mjs';
import { left } from './create.mjs';

const errorKind = createEitherKind("error");
/**
 * @deprecated use errorKind
 */
const eitherErrorKind = errorKind;
/**
 * {@include either/error/index.md}
 */
function error(value) {
    return errorKind.setTo(left("error", value));
}

export { eitherErrorKind, error, errorKind };
