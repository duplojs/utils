import { isRuntimeKind } from '../common/kind.mjs';
import '../common/stringToBytes.mjs';
import '../common/stringToMillisecond.mjs';
import { isRuntimeWrappedValueKey } from '../common/wrapValue.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import '../either/bool/falsy.mjs';
import '../either/bool/truthy.mjs';
import '../either/bool/base.mjs';
import '../either/left/create.mjs';
import '../either/left/error.mjs';
import '../either/left/fail.mjs';
import '../either/kind.mjs';
import '../either/right/success.mjs';
import '../either/right/create.mjs';
import '../either/right/ok.mjs';
import '../either/future/success.mjs';
import '../either/future/error.mjs';
import '../either/future/base.mjs';
import '../either/nullable/empty.mjs';
import '../either/nullable/filled.mjs';
import '../either/nullable/base.mjs';
import '../either/nullish/empty.mjs';
import '../either/nullish/filled.mjs';
import '../either/nullish/base.mjs';
import '../either/optional/empty.mjs';
import '../either/optional/filled.mjs';
import '../either/optional/base.mjs';

function keys(object) {
    return Object.keys(object)
        .filter((key) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key));
}

export { keys };
