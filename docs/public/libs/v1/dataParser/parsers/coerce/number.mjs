import '../../base.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import { number as number$1 } from '../number/index.mjs';
import '../../../pattern/result.mjs';

function number(definition) {
    return number$1({
        ...definition,
        coerce: true,
    });
}

export { number };
