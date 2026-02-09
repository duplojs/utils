import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import { isRuntimeKind } from '../common/kind.mjs';

/**
 * {@include object/entries/index.md}
 */
function entries(object) {
    const result = [];
    for (const key in object) {
        if (!isRuntimeWrappedValueKey(key) && !isRuntimeKind(key)) {
            result.push([key, object[key]]);
        }
    }
    return result;
}
/**
 * @deprecated Not ignore kind key.
 */
entries.unsafe = function (object) {
    return Object.entries(object);
};

export { entries };
