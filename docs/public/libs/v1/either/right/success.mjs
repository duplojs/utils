import { createEitherKind } from '../kind.mjs';
import { right } from './create.mjs';

const successKind = createEitherKind("success");
/**
 * @deprecated use successKind
 */
const eitherSuccessKind = successKind;
/**
 * {@include either/success/index.md}
 */
function success(value) {
    return successKind.setTo(right("success", value));
}

export { eitherSuccessKind, success, successKind };
