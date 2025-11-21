import '../../base.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import { nil as nil$1 } from '../nil.mjs';
import '../../../pattern/result.mjs';

function nil(definition) {
    return nil$1({
        ...definition,
        coerce: true,
    });
}

export { nil };
