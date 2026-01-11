import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import { isRuntimeKind } from '../common/kind.mjs';

/**
 * {@include object/keys/index.md}
 */
function keys(object) {
    return Object.keys(object)
        .filter((key) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key));
}

export { keys };
