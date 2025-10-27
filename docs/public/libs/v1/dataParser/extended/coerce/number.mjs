import '../../../pattern/result.mjs';
import { number as number$1 } from '../number.mjs';

function number(definition) {
    return number$1({
        ...definition,
        coerce: true,
    });
}

export { number };
