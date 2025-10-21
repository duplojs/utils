import { createKind } from '../../common/kind.mjs';
import { left } from './create.mjs';

const eitherFailKind = createKind("either-fail");
function fail() {
    return eitherFailKind.addTo(left("fail", undefined));
}

export { eitherFailKind, fail };
