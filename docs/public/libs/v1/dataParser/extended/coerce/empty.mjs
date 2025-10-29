import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import '../../../pattern/result.mjs';
import { empty as empty$1 } from '../empty.mjs';

function empty(definition) {
    return empty$1({
        ...definition,
        coerce: true,
    });
}

export { empty };
