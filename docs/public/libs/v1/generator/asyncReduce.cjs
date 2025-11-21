'use strict';

var unwrap = require('../common/unwrap.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
var override = require('../object/override.cjs');

function asyncReduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (iterator) => asyncReduce(iterator, fromValue, theFunction);
    }
    const [iterator, fromValue, theFunction] = args;
    let lastValue = unwrap.unwrap(fromValue);
    return (async () => {
        let index = 0;
        for await (const element of iterator) {
            const result = await theFunction({
                element,
                index,
                lastValue,
                nextWithObject: ((object1, object2) => ({
                    "-next": override.override(object1, object2),
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

exports.asyncReduce = asyncReduce;
