import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import { isRuntimeKind } from '../common/kind.mjs';

/**
 * {@include object/countKeys/index.md}
 */
function countKeys(object) {
    return Object.keys(object)
        .filter((key) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key))
        .length;
}

export { countKeys };
