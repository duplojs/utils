import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import { boolean as boolean$1 } from '../boolean.mjs';
import '../../../pattern/result.mjs';

function boolean(definition) {
    return boolean$1({
        ...definition,
        coerce: true,
    });
}

export { boolean };
