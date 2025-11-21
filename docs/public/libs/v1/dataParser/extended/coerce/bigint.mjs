import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import '../../base.mjs';
import '../../../pattern/result.mjs';
import { bigint as bigint$1 } from '../bigint.mjs';

function bigint(definition) {
    return bigint$1({
        ...definition,
        coerce: true,
    });
}

export { bigint };
