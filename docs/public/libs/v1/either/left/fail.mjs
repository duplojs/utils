import { createEitherKind } from '../kind.mjs';
import { left } from './create.mjs';

const eitherFailKind = createEitherKind("fail");
/**
 * {@include either/fail/index.md}
 */
function fail() {
    return eitherFailKind.setTo(left("fail", undefined));
}

export { eitherFailKind, fail };
