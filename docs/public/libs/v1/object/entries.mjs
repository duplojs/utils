import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import { isRuntimeKind } from '../common/kind.mjs';

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
