import { createEitherKind } from '../kind.mjs';
import { right } from './create.mjs';

const eitherSuccessKind = createEitherKind("success");
/**
 * {@include either/success/index.md}
 */
function success(value) {
    return eitherSuccessKind.setTo(right("success", value));
}

export { eitherSuccessKind, success };
