import { unwrap } from '../common/unwrap.mjs';
import { reduceTools } from '../array/reduce.mjs';

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
            const result = await theFunction({
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
    })();
}

export { asyncReduce };
