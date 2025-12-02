import { unwrap } from '../common/unwrap.mjs';
import { override } from '../object/override.mjs';

function reduceRight(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (array) => reduceRight(array, fromValue, theFunction);
    }
    const [array, fromValue, theFunction] = args;
    let lastValue = unwrap(fromValue);
    for (let index = array.length - 1; index >= 0; index--) {
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

export { reduceRight };
