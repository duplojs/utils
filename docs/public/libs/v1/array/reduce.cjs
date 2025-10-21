'use strict';

var kind = require('../common/kind.cjs');
var wrapValue = require('../common/wrapValue.cjs');
var unwrap = require('../common/unwrap.cjs');
var override = require('../object/override.cjs');

const arrayReduceFromKind = kind.createKind("array-reduce-from");
function reduceFrom(value) {
    return arrayReduceFromKind.addTo(wrapValue.wrapValue(value));
}
function reduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (array) => reduce(array, fromValue, theFunction);
    }
    const [array, fromValue, theFunction] = args;
    let lastValue = unwrap.unwrap(fromValue);
    for (let index = 0; index < array.length; index++) {
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

exports.reduce = reduce;
exports.reduceFrom = reduceFrom;
