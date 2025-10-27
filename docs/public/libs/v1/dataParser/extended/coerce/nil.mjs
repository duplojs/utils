import '../../../pattern/result.mjs';
import { nil as nil$1 } from '../nil.mjs';

function nil(definition) {
    return nil$1({
        ...definition,
        coerce: true,
    });
}

export { nil };
