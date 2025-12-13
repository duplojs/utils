import { createKind } from '../common/kind.mjs';
import { wrapValue } from '../common/wrapValue.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { push } from './push.mjs';
import { override } from '../object/override.mjs';

const arrayReduceFromKind = createKind("array-reduce-from");
function reduceFrom(value) {
    return arrayReduceFromKind.setTo(wrapValue(value));
}
const reduceTools = {
    exit(output) {
        return { "-exit": output };
    },
    next(output) {
        return { "-next": output };
    },
    nextWithObject(object1, object2) {
        return { "-next": override(object1, object2) };
    },
    nextPush(array, ...[value, ...values]) {
        return { "-next": push(array, value, ...values) };
    },
};
function reduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (input) => reduce(input, fromValue, theFunction);
    }
    const [input, fromValue, theFunction] = args;
    let lastValue = unwrap(fromValue);
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const result = theFunction({
            element,
            index,
            lastValue,
            self: input,
            ...reduceTools,
        });
        if ("-exit" in result) {
            return result["-exit"];
        }
        lastValue = result["-next"];
    }
    return lastValue;
}

export { reduce, reduceFrom, reduceTools };
