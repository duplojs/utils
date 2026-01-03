'use strict';

var kind = require('../common/kind.cjs');
var wrapValue = require('../common/wrapValue.cjs');
var unwrap = require('../common/unwrap.cjs');
var push = require('./push.cjs');
var override = require('../object/override.cjs');

const arrayReduceFromKind = kind.createKind("array-reduce-from");
/**
 * {@include array/reduceFrom/index.md}
 */
function reduceFrom(value) {
    return arrayReduceFromKind.setTo(wrapValue.wrapValue(value));
}
const reduceTools = {
    exit(output) {
        return { "-exit": output };
    },
    next(output) {
        return { "-next": output };
    },
    nextWithObject(object1, object2) {
        return { "-next": override.override(object1, object2) };
    },
    nextPush(array, ...[value, ...values]) {
        return { "-next": push.push(array, value, ...values) };
    },
};
function reduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (input) => reduce(input, fromValue, theFunction);
    }
    const [input, fromValue, theFunction] = args;
    let lastValue = unwrap.unwrap(fromValue);
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const result = theFunction({
            element,
            index,
            lastValue,
            self: input,
            ...reduceTools,
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
exports.reduceTools = reduceTools;
