import { isRuntimeKind } from '../common/kind.mjs';
import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';

function values(object) {
    return Object.entries(object)
        .filter(([key]) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key))
        .map(([, value]) => value);
}

export { values };
