import { createKind } from '../../common/kind.mjs';
import { right } from './create.mjs';

const eitherOkKind = createKind("either-ok");
function ok() {
    return eitherOkKind.setTo(right("ok", undefined));
}

export { eitherOkKind, ok };
