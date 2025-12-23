import { createEitherKind } from '../kind.mjs';
import { left } from './create.mjs';

const eitherFailKind = createEitherKind("fail");
function fail() {
    return eitherFailKind.setTo(left("fail", undefined));
}

export { eitherFailKind, fail };
