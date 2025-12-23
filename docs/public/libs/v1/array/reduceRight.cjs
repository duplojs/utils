'use strict';

var unwrap = require('../common/unwrap.cjs');
var reduce = require('./reduce.cjs');

function reduceRight(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (input) => reduceRight(input, fromValue, theFunction);
    }
    const [input, fromValue, theFunction] = args;
    let lastValue = unwrap.unwrap(fromValue);
    for (let index = input.length - 1; index >= 0; index--) {
        const element = input[index];
        const result = theFunction({
            element,
            index,
            lastValue,
            self: input,
            ...reduce.reduceTools,
        });
        if ("-exit" in result) {
            return result["-exit"];
        }
        lastValue = result["-next"];
    }
    return lastValue;
}

exports.reduceRight = reduceRight;
