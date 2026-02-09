'use strict';

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
    const result = {};
    for (let index = 0; index < array.length; index++) {
        const { group, value } = theFunction(array[index], {
            index,
            output: groupOutput,
        });
        if (result[group]) {
            result[group].push(value);
        }
        else {
            result[group] = [value];
        }
    }
    return result;
}

exports.group = group;
exports.groupOutput = groupOutput;
