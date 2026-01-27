import { createEitherKind } from '../kind.mjs';
import { left } from './create.mjs';

const failKind = createEitherKind("fail");
/**
 * @deprecated use failKind
 */
const eitherFailKind = failKind;
/**
 * {@include either/fail/index.md}
 */
function fail() {
    return failKind.setTo(left("fail", undefined));
}

export { eitherFailKind, fail, failKind };
