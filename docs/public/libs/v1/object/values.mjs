import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import { isRuntimeKind } from '../common/kind.mjs';

function values(object) {
    return Object.entries(object)
        .filter(([key]) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key))
        .map(([, value]) => value);
}

export { values };
