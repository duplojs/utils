'use strict';

var reduce = require('./reduce.cjs');

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
    return reduce.reduce(array, reduce.reduceFrom({}), ({ index, element, lastValue, nextWithObject }) => {
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

exports.group = group;
exports.groupOutput = groupOutput;
