import '../../base.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import { bigint as bigint$1 } from '../bigint/index.mjs';
import '../../../pattern/result.mjs';

function bigint(definition) {
    return bigint$1({
        ...definition,
        coerce: true,
    });
}

export { bigint };
