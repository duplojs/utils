import { isRuntimeKind } from '../common/kind.mjs';
import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';

function keys(object) {
    return Object.keys(object)
        .filter((key) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key));
}

export { keys };
