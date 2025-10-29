'use strict';

var unwrap = require('../common/unwrap.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
var override = require('../object/override.cjs');

function reduceRight(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (array) => reduceRight(array, fromValue, theFunction);
    }
    const [array, fromValue, theFunction] = args;
    let lastValue = unwrap.unwrap(fromValue);
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        const result = theFunction({
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
    }
    return lastValue;
}

exports.reduceRight = reduceRight;
