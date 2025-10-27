import { string as string$1 } from '../string.mjs';
import '../../../pattern/result.mjs';

function string(definition) {
    return string$1({
        ...definition,
        coerce: true,
    });
}

export { string };
