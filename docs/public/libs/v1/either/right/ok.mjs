import { createEitherKind } from '../kind.mjs';
import { right } from './create.mjs';

const eitherOkKind = createEitherKind("ok");
/**
 * {@include either/ok/index.md}
 */
function ok() {
    return eitherOkKind.setTo(right("ok", undefined));
}

export { eitherOkKind, ok };
