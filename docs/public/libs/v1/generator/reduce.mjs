import { createKind } from '../common/kind.mjs';
import { wrapValue } from '../common/wrapValue.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { reduceTools } from '../array/reduce.mjs';

const generatorReduceFromKind = createKind("generator-reduce-from");
/**
 * {@include generator/reduceFrom/index.md}
 */
function reduceFrom(value) {
    return generatorReduceFromKind.setTo(wrapValue(value));
}
function reduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (iterator) => reduce(iterator, fromValue, theFunction);
    }
    const [iterator, fromValue, theFunction] = args;
    let lastValue = unwrap(fromValue);
    let index = 0;
    for (const element of iterator) {
        const result = theFunction({
            element,
            index,
            lastValue,
            ...reduceTools,
        });
        if ("-exit" in result) {
            return result["-exit"];
        }
        lastValue = result["-next"];
        index++;
    }
    return lastValue;
}

export { reduce, reduceFrom };
