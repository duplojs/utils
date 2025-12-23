import { reduce, reduceFrom } from './reduce.mjs';

function groupOutput(...args) {
    if (args.length === 1) {
        const [group] = args;
        return (input) => groupOutput(group, input);
    }
    const [group, value] = args;
    return {
        group,
        value,
    };
}
function group(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (array) => group(array, theFunction);
    }
    const [array, theFunction] = args;
    return reduce(array, reduceFrom({}), ({ index, element, lastValue, nextWithObject }) => {
        const { group, value } = theFunction(element, {
            index,
            output: groupOutput,
        });
        return nextWithObject(lastValue, {
            [group]: [
                ...(lastValue[group] ?? []),
                value,
            ],
        });
    });
}

export { group, groupOutput };
