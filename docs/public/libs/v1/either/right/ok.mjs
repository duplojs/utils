import { createEitherKind } from '../kind.mjs';
import { right } from './create.mjs';

const okKind = createEitherKind("ok");
/**
 * @deprecated use okKind
 */
const eitherOkKind = okKind;
/**
 * {@include either/ok/index.md}
 */
function ok() {
    return okKind.setTo(right("ok", undefined));
}

export { eitherOkKind, ok, okKind };
