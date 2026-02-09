import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import { isRuntimeKind } from '../common/kind.mjs';

/**
 * {@include object/keys/index.md}
 */
function keys(object) {
    const result = [];
    for (const key in object) {
        if (!isRuntimeWrappedValueKey(key) && !isRuntimeKind(key)) {
            result.push(key);
        }
    }
    return result;
}

export { keys };
