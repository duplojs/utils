import { unwrap } from '../common/unwrap.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import { override } from '../object/override.mjs';

function asyncReduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (iterator) => asyncReduce(iterator, fromValue, theFunction);
    }
    const [iterator, fromValue, theFunction] = args;
    let lastValue = unwrap(fromValue);
    return (async () => {
        let index = 0;
        for await (const element of iterator) {
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
            index++;
        }
        return lastValue;
    })();
}

export { asyncReduce };
