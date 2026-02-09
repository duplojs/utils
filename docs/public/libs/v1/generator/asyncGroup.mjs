import { groupOutput } from './group.mjs';

function asyncGroup(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (asyncIterator) => asyncGroup(asyncIterator, theFunction);
    }
    const [asyncIterator, theFunction] = args;
    const result = {};
    let index = 0;
    return (async () => {
        for await (const element of asyncIterator) {
            const { group, value } = await theFunction(element, {
                index,
                output: groupOutput,
            });
            if (result[group]) {
                result[group].push(value);
            }
            else {
                result[group] = [value];
            }
            index++;
        }
        return result;
    })();
}

export { asyncGroup };
