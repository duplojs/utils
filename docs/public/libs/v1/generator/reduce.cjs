'use strict';

var kind = require('../common/kind.cjs');
var wrapValue = require('../common/wrapValue.cjs');
var unwrap = require('../common/unwrap.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
var override = require('../object/override.cjs');

const generatorReduceFromKind = kind.createKind("generator-reduce-from");
function reduceFrom(value) {
    return generatorReduceFromKind.setTo(wrapValue.wrapValue(value));
}
function reduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (iterator) => reduce(iterator, fromValue, theFunction);
    }
    const [iterator, fromValue, theFunction] = args;
    let lastValue = unwrap.unwrap(fromValue);
    let index = 0;
    for (const element of iterator) {
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
        index++;
    }
    return lastValue;
}

exports.reduce = reduce;
exports.reduceFrom = reduceFrom;
