import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import { isRuntimeKind } from '../common/kind.mjs';

function countKeys(object) {
    return Object.keys(object)
        .filter((key) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key))
        .length;
}

export { countKeys };
