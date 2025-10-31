import { unwrap } from '../common/unwrap.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';

function exhaustive(result) {
    return unwrap(result);
}

export { exhaustive };
