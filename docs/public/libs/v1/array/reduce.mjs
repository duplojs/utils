import { createKind } from '../common/kind.mjs';
import { wrapValue } from '../common/wrapValue.mjs';
import { unwrap } from '../common/unwrap.mjs';
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
