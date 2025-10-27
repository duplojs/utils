import { number as number$1 } from '../number/index.mjs';
import '../../../pattern/result.mjs';

function number(definition) {
    return number$1({
        ...definition,
        coerce: true,
    });
}

export { number };
