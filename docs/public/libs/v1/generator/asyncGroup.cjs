'use strict';

var group = require('./group.cjs');

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
            const { group: group$1, value } = await theFunction(element, {
                index,
                output: group.groupOutput,
            });
            if (result[group$1]) {
                result[group$1].push(value);
            }
            else {
                result[group$1] = [value];
            }
            index++;
        }
        return result;
    })();
}

exports.asyncGroup = asyncGroup;
