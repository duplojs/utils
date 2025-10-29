import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import { empty as empty$1 } from '../empty.mjs';
import '../../../pattern/result.mjs';

function empty(definition) {
    return empty$1({
        ...definition,
        coerce: true,
    });
}

export { empty };
