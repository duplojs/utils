'use strict';

function pick(...args) {
    if (args.length === 1) {
        const [pickValue] = args;
        return (input) => pick(input, pickValue);
    }
    const [input, pickValue] = args;
    const formattedPickValue = pickValue instanceof Array
        ? pickValue.reduce((acc, value) => {
            acc[value] = true;
            return acc;
        }, {})
        : pickValue;
    return Object.entries(input)
        .reduce((acc, [key, value]) => {
        if (formattedPickValue[key] === true) {
            acc[key] = value;
        }
        return acc;
    }, {});
}

exports.pick = pick;
