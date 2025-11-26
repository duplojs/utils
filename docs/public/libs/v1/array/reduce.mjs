import { createKind } from '../common/kind.mjs';
import { wrapValue } from '../common/wrapValue.mjs';
import { unwrap } from '../common/unwrap.mjs';
import '../common/stringToBytes.mjs';
import '../common/stringToMillisecond.mjs';
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
import { override } from '../object/override.mjs';

const arrayReduceFromKind = createKind("array-reduce-from");
function reduceFrom(value) {
    return arrayReduceFromKind.setTo(wrapValue(value));
}
function reduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (array) => reduce(array, fromValue, theFunction);
    }
    const [array, fromValue, theFunction] = args;
    let lastValue = unwrap(fromValue);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = theFunction({
            element,
            index,
            lastValue,
            nextWithObject: ((object1, object2) => ({
                "-next": override(object1, object2),
            })),
            exit: (output) => ({ "-exit": output }),
            next: (output) => ({ "-next": output }),
        });
        if ("-exit" in result) {
            return result["-exit"];
        }
        lastValue = result["-next"];
    }
    return lastValue;
}

export { reduce, reduceFrom };
