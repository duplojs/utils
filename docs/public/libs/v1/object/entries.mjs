import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import { isRuntimeKind } from '../common/kind.mjs';

/**
 * {@include object/entries/index.md}
 */
function entries(object) {
    return Object.entries(object)
        .filter(([key]) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key));
}
/**
 * @deprecated Not ignore kind key.
 */
entries.unsafe = function (object) {
    return Object.entries(object);
};

export { entries };
